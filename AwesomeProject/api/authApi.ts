import axios from "axios";
import {
    LoginUserInput,
    LoginUserOutput,
} from "../components/common/hooks/login";

const apiClient = axios.create({
    baseURL: "https://localhost:7268/api/v1/Auth",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

export const login = async ({ cpf, password }: LoginUserInput) => {
    console.log(cpf, password);
    const { data, status } = await apiClient.post<LoginUserOutput>(`/Login/`, {
        cpf,
        password,
    });
    localStorage.setItem("userInfo", JSON.stringify(data.token));
    console.log("status" + status);
    console.log("user data " + data.user.cpf);
    return data;
};
