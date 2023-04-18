import React, { FormEvent, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from "react-native";
import {
    Container,
    Input,
    Text,
    Stack,
    FormControl,
    VStack,
    useNativeBase,
    NativeBaseProvider,
    Heading,
    Center,
    Box,
    Link,
    HStack,
    Button,
    Spinner,
    Collapse,
    Alert,
    IconButton,
    CloseIcon,
    AlertDialog,
} from "native-base";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
    LoginUserError,
    LoginUserInput,
    LoginUserOutput,
    useLogin,
} from "../common/hooks/login";
import { TextInputMask } from "react-native-masked-text";
import ForgotPasswordScreen from "./ForgotPassword";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/authApi";
import { AxiosError } from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    // define other screens here
};
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;
const LoginScreen: React.FC = () => {
    const [cpf, setCpf] = useState("aafasd");
    const [password, setPassword] = useState("1231232");
    const [cpfError, setCpfError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    // const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = React.useState(true);

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const validate = () => {
        if (cpf === undefined) {
            setCpfError("CPF é obrigatório");
            return false;
        } else if (password.length < 8) {
            setPasswordError("Senha deve ter pelo menos 8 caracteres");
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        try {
            const input: LoginUserInput = { cpf, password };
            useLogin(input);
            // navigation.navigate("Home");
        } catch (err) {}
    };

    const {
        mutation: { mutate, isLoading, isError, error, data },
    } = useLogin({ cpf, password });
    const mutation = useMutation<any, AxiosError<any, any>, LoginUserInput>(
        login,
        {
            onSuccess: (data) => {
                console.log("success");
                console.log("data: " + data.token);
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify(data.data.token)
                );
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
    mutation.isLoading ? console.log("loading") : console.log("not loading");

    const onSubmit = () => {
        setIsOpen(true);
        validate() && cpf && password
            ? mutation.mutate({ cpf, password })
            : null;
    };

    useEffect(() => {
        // action on update of movies
    }, [cpfError, passwordError, showModal]);
    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => setIsOpen(false);
    return (
        <NativeBaseProvider>
            {showModal && (
                <ForgotPasswordScreen
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
            {/* {mutation.isError && (
                <Text>An error occurred: {mutation.error}</Text>
            )} */}

            <SafeAreaView>
                <Center w="100%">
                    <ReactQueryDevtools initialIsOpen={false} />

                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        {/* {data && data.login ? (
                            <Message variant="success">
                                Redirecionando...
                            </Message>
                        ) : null}
                        {error ? (
                            <Message variant="warning">{error.message}</Message>
                        ) : null} */}
                        <Heading
                            size="lg"
                            fontWeight="600"
                            color="coolGray.800"
                            _dark={{
                                color: "warmGray.50",
                            }}
                        >
                            Bem-vindo!
                        </Heading>
                        <Heading
                            mt="1"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            color="coolGray.600"
                            fontWeight="medium"
                            size="xs"
                        >
                            Entre para continuar!
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl isRequired isInvalid={cpfError !== ""}>
                                <FormControl.Label
                                    _text={{
                                        bold: true,
                                    }}
                                >
                                    CPF
                                </FormControl.Label>

                                <Input
                                    placeholder="12345678910"
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    onChangeText={(value) => setCpf(value)}
                                />
                                {/* <TextInputMask
                                    type={"cpf"}
                                    placeholder="123.456.789-10"
                                    keyboardType="numeric"
                                    keyboardAppearance="dark"
                                    value={username}
                                    onChangeText={(text) => setUsername(text)}
                                    style={{ height: 40 }}
                                /> */}
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
                                        Apenas números.
                                    </FormControl.HelperText>
                                )}
                            </FormControl>

                            <FormControl
                                isRequired
                                isInvalid={passwordError && true}
                            >
                                <FormControl.Label
                                    _text={{
                                        bold: true,
                                    }}
                                >
                                    Senha
                                </FormControl.Label>
                                <Input
                                    placeholder="●●●●●●●●"
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

                                <Link
                                    onPress={() => setShowModal(true)}
                                    _text={{
                                        fontSize: "xs",
                                        fontWeight: "500",
                                        color: "indigo.500",
                                    }}
                                    alignSelf="flex-end"
                                    mt="1"
                                >
                                    Esqueceu a senha?
                                </Link>
                            </FormControl>

                            {mutation.isLoading ? (
                                <HStack space={2} justifyContent="center">
                                    <Spinner accessibilityLabel="Loading posts" />
                                    <Heading color="primary.500" fontSize="md">
                                        Loading
                                    </Heading>
                                </HStack>
                            ) : (
                                <Button
                                    onPress={onSubmit}
                                    mt="2"
                                    colorScheme="indigo"
                                >
                                    Entrar
                                </Button>
                            )}
                            {mutation.isError ? (
                                <AlertDialog
                                    isOpen={mutation.isError && isOpen}
                                    onClose={onClose}
                                    leastDestructiveRef={undefined}
                                >
                                    <AlertDialog.Content>
                                        <AlertDialog.CloseButton />
                                        <AlertDialog.Header>
                                            {mutation.error.response.status}
                                        </AlertDialog.Header>
                                        <AlertDialog.Body>
                                            {
                                                mutation.error.response?.data
                                                    .messages
                                            }
                                        </AlertDialog.Body>
                                    </AlertDialog.Content>
                                </AlertDialog>
                            ) : null}
                            <HStack mt="6" justifyContent="center">
                                <Text
                                    fontSize="sm"
                                    color="coolGray.600"
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    Novo usuário?{" "}
                                </Text>
                                <Link
                                    _text={{
                                        color: "indigo.500",
                                        fontWeight: "medium",
                                        fontSize: "sm",
                                    }}
                                    onPress={() =>
                                        navigation.navigate("Register")
                                    }
                                >
                                    Cadastre-se
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: Dimensions.get("screen").width,
    },
    logoContainer: {
        // alignItems: "center",
        // marginTop: 50,
        // marginBottom: 50,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "white",
    },
    logo: {
        width: 150,
        height: 150,
    },
    button: {
        marginTop: 20,
    },
});

export default LoginScreen;
