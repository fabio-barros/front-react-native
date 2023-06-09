import axios from "axios";
import {
    LoginUserInput,
    LoginUserOutput,
    Phone,
} from "../components/common/hooks/login";

const apiClient = axios.create({
    baseURL: "https://localhost:7268/api/v1/Auth",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

export interface RegisterUserInput {
    firstName: string;
    lastName: string;
    cpf: string;
    email: string;
    password: string;
    role: number;
    phone: Phone;
}

interface LoginUserError {
    erros: string[];
}

export const login = async ({ cpf, password }: LoginUserInput) => {
    console.log(cpf, password);

    try {
        const data = await apiClient.post<LoginUserOutput>(`/Login/`, {
            cpf,
            password,
        });

        console.log(data.data.user.firstName);
        console.log(data.data.user.lastName);
        console.log(data.data.user.email);
        console.log(data.data.user.cpf);
        console.log(data.data.user.id);
        console.log(data.data.user.phone.phoneNumber);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // console.log("error : ", error);
            // console.log("error message: ", error.message);
            console.log("error data: ", error.response?.data.messages);
            // console.log("error status: ", error.response.status);
            // 👇️ error: AxiosError<any, any>
            throw error;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
};

export const register = async ({
    firstName,
    lastName,
    cpf,
    email,
    password,
    role,
}: RegisterUserInput) => {
    console.log(cpf, password);

    try {
        const data = await apiClient.post<LoginUserOutput>(`/Register/`, {
            cpf,
            password,
        });

        console.log(data.data.user.firstName);
        console.log(data.data.user.lastName);
        console.log(data.data.user.email);
        console.log(data.data.user.cpf);
        console.log(data.data.user.id);
        console.log(data.data.user.phone.phoneNumber);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // console.log("error : ", error);
            // console.log("error message: ", error.message);
            console.log("error data: ", error.response?.data.messages);
            // console.log("error status: ", error.response.status);
            // 👇️ error: AxiosError<any, any>
            throw error;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
};
