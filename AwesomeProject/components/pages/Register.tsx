import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import axios, { AxiosError } from "axios";
import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    VStack,
} from "native-base";
import { useMutation } from "@tanstack/react-query";
import { RegisterUserInput, register } from "../../api/authApi";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
    CompleteRegister: undefined;
};
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const RegisterScreen = () => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [cpfError, setCpfError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const navigation = useNavigation<RegisterScreenNavigationProp>();

    const mutation = useMutation<any, AxiosError<any, any>, RegisterUserInput>(
        register,
        {
            onSuccess: (data) => {
                console.log("success");
                console.log("data: " + data.token);
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify(data.data.token)
                );
                navigation.navigate("CompleteRegister");
            },
            onError: (error) => {
                console.log("error message on hook: " + error.message);
                console.log("error data: ", error.response?.data.messages);
                if (error.response.status === 422) {
                    console.log("Usuário ou senha incorretos");
                } else if (error.response.status === 500) {
                    console.log("Erro interno do servidor");
                } else if (error.response.status === 404) {
                    console.log("Usuário não encontrado");
                } else if (error.response.status === 400) {
                    console.log("Erro de validação");
                }
            },
            onMutate: (input) => {
                console.log("onMutate: " + input);
            },
        }
    );

    function formatCPF(cpf) {
        const firstBlock = cpf.substr(0, 3);
        const secondBlock = cpf.substr(3, 3);
        const thirdBlock = cpf.substr(6, 3);
        const verificationDigits = cpf.substr(9, 2);

        return `${firstBlock}.${secondBlock}.${thirdBlock}-${verificationDigits}`;
    }

    const validate = () => {
        if (!cpf || !cpf.match(/^\d{11}$/)) {
            setCpfError("O CPF deve ter 11 dígitos.");
            return false;
        } else if (!password || password.length < 8) {
            setPasswordError("A senha deve ter pelo menos 8 dígitos.");
            return false;
        } else if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem.");
            return false;
        }
        return true;
    };
    const onSubmit = () => {
        cpf &&
            password &&
            confirmPassword &&
            validate() &&
            navigation.navigate("CompleteRegister");
        // ? mutation.mutate({ cpf, password })
        // : null;
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}
                    fontWeight="semibold"
                >
                    Bem-vindo!
                </Heading>
                <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    fontWeight="medium"
                    size="xs"
                >
                    Cadastre-se para continuar!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={cpfError !== ""}>
                        <FormControl.Label>CPF</FormControl.Label>
                        <Input onChangeText={(value) => setCpf(value)} />
                        {cpfError ? (
                            <FormControl.ErrorMessage
                                _text={{
                                    fontSize: "xs",
                                    color: "error.500",
                                    fontWeight: 500,
                                }}
                            >
                                {cpfError}
                            </FormControl.ErrorMessage>
                        ) : (
                            <FormControl.HelperText
                                _text={{
                                    fontSize: "xs",
                                }}
                            >
                                {cpfError}
                            </FormControl.HelperText>
                        )}
                    </FormControl>
                    <FormControl isRequired isInvalid={passwordError && true}>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            type="password"
                            onChangeText={(value) => setPassword(value)}
                        />
                        {passwordError ? (
                            <FormControl.ErrorMessage
                                _text={{
                                    fontSize: "xs",
                                    color: "error.500",
                                    fontWeight: 500,
                                }}
                            >
                                {passwordError}
                            </FormControl.ErrorMessage>
                        ) : (
                            <FormControl.HelperText
                                _text={{
                                    fontSize: "xs",
                                }}
                            ></FormControl.HelperText>
                        )}
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Confirmar Senha</FormControl.Label>
                        <Input
                            type="password"
                            onChangeText={(value) => setconfirmPassword(value)}
                        />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                        Cadastrar
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    phoneContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    dddInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        flex: 1,
    },
    phoneInput: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginLeft: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#F57C00",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default RegisterScreen;
