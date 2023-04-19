import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../api/userApi";
import { LoginUserOutput, User } from "./login";

export const useNewUser = () => {
    // const userInfo = await AsyncStorage.getItem("userInfo"));

    const { data: userInfo } = useQuery<LoginUserOutput>(
        ["userInfo"],
        async () => {
            const value = await AsyncStorage.getItem("userInfo");

            return JSON.parse(value);
        }
    );

    const { data, isLoading, isError, error } = useQuery(["user"], () =>
        getUser({ id: userInfo.user.id })
    );

    return { data, isLoading, isError, error };
};
