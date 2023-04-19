import axios from "axios";
import { Building } from "./models/building";
const apiClient = axios.create({
    baseURL: "https://localhost:7268/api/",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

export interface GetBuildingsOutPut {
    buildings: Building[];
}

export const getBuildings = async () => {
    try {
        const data = await apiClient.get<GetBuildingsOutPut>(`/Building`);
        console.log("getBuildings data: ", data);
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
