import React, { FC, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import axios from "axios";
import {
    Box,
    Button,
    Center,
    FormControl,
    HStack,
    Heading,
    Input,
    VStack,
} from "native-base";
interface CompleteRegisterScreenProps {
    cpf: string;
    password: string;
}

const CompleteRegisterScreen: FC<CompleteRegisterScreenProps> = ({
    cpf,
    password,
}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ddd, setDdd] = useState("");

    const handleRegister = () => {
        const user = {
            firstName,
            lastName,
            cpf,
            email,
            password,

            phoneNumber,
            ddd,
        };

        axios
            .post("http://localhost:3000/users", user)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
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
                    <FormControl>
                        <FormControl.Label>Nome</FormControl.Label>
                        <Input value={firstName} onChangeText={setFirstName} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Sobrenome</FormControl.Label>
                        <Input value={lastName} onChangeText={setLastName} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <HStack space={2} mt="2">
                        <FormControl>
                            <FormControl.Label>DDD</FormControl.Label>
                            <Input
                                value={ddd}
                                onChangeText={setDdd}
                                keyboardType="phone-pad"
                                maxLength={2}
                                maxWidth={24}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Telefone</FormControl.Label>
                            <Input
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                keyboardType="phone-pad"
                                maxLength={9}
                                width="74%"
                            />
                        </FormControl>
                    </HStack>
                    <Button mt="2" colorScheme="indigo">
                        Sign up
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

export default CompleteRegisterScreen;
