import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { login } from "../../../api/authApi";

export interface Phone {
    id: string;
    phoneNumber: string;
    ddd: string;
}

export interface User {
    id: string;
    cpf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: Phone;
    address: string;
    Role: number;
    apartmentId?: string;
}

export interface LoginUserInput {
    cpf: string;
    password: string;
}

export interface LoginUserOutput {
    token: string;
    user: User;
}

export interface LoginUserError {
    erros: string[];
}

// const login = async (input: LoginUserInput) => {
//     const { data } = await axios.post<LoginUserOutput>(
//         "https://localhost:7268/api/v1/Auth/Login",
//         input
//     );
//     localStorage.setItem("userInfo", JSON.stringify(data.token));
//     return data;
// };

export const useLogin = (input: LoginUserInput) => {
    const mutation = useMutation<any, Error, LoginUserInput>(
        ["login"],
        () => login(input),
        {
            onSuccess: (data) => {
                localStorage.setItem("userInfo", JSON.stringify(data.token));
            },
            onError: (error) => {
                console.log("error message on hook: " + error.message);
            },
            onMutate: (input) => {
                console.log("onMutate: " + input);
            },
        }
    );
    return { mutation, login };
};
