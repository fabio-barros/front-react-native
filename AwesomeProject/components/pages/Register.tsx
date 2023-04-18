import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import axios from "axios";

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ddd, setDdd] = useState("");

    const handleRegister = () => {
        const user = {
            firstName,
            lastName,
            cpf,
            email,
            password,
            role,
            phoneNumber,
            ddd,
        };

        axios
            .post("http://localhost:3000/users", user)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={setCpf}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={styles.phoneContainer}>
                    <TextInput
                        style={styles.dddInput}
                        placeholder="DDD"
                        value={ddd}
                        onChangeText={setDdd}
                    />
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="Telefone"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Role"
                    value={role}
                    onChangeText={setRole}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
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
