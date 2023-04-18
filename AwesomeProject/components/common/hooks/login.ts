import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
    id: string;
    cpf: string;
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

const login = async (input: LoginUserInput) => {
    const { data } = await axios.post<LoginUserOutput>(
        "https://localhost:7268/api/v1/Auth/Login",
        input
    );
    localStorage.setItem("userInfo", JSON.stringify(data.token));
    return data;
};

export const useLogin = (input: LoginUserInput) => {
    const { isLoading, data, error } = useMutation<
        LoginUserOutput,
        LoginUserError
    >(["login"], () => login(input), {});
    console.log(data);
    return { isLoading, data, error, login };
};
