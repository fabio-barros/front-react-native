import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    // define other screens here
};
type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Login"
>;

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const handleLogin = async () => {
        try {
            const response = await axios.post("https://your-api.com/login", {
                email,
                password,
            });
            const token = response.data.token;
            await AsyncStorage.setItem("token", token);
            navigation.navigate("Home"); // Navigate to the HomeScreen
        } catch (e) {
            setError("Invalid email or password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    error: {
        color: "red",
        marginTop: 10,
    },
});

export default LoginScreen;
