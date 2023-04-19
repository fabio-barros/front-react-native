import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import {
    Box,
    Button,
    HStack,
    Heading,
    Icon,
    IconButton,
    StatusBar,
    Text,
    useColorMode,
} from "native-base";
import React, { FC, useEffect, useState } from "react";
import {} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen: FC = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        async function getUserInfo() {
            try {
                const value = await AsyncStorage.getItem("userInfo");
                if (value !== null) {
                    setUserInfo(JSON.parse(value));
                }
            } catch (error) {
                console.error(
                    "Error getting user info from AsyncStorage:",
                    error
                );
            }
        }

        getUserInfo();
    }, []);

    return (
        <Box>
            <HStack
                // bg="primary.500"
                px={1}
                py={3}
                justifyContent="space-between"
                _dark={{
                    bg: "coolGray.800",
                }}
                _light={{
                    bg: "primary.500",
                }}
            >
                <HStack alignItems="center">
                    <IconButton
                        icon={
                            <Icon
                                size="lg"
                                as={
                                    <MaterialCommunityIcons name="account-circle" />
                                }
                                name="menu"
                                color="white"
                            />
                        }
                    />
                    {userInfo ? (
                        <HStack alignItems="center">
                            <Text color="white" fontSize="20" fontWeight="bold">
                                Olá, {userInfo.user.firstName}!
                            </Text>
                        </HStack>
                    ) : (
                        <Heading>Olá, visitante!</Heading>
                    )}
                </HStack>
                <HStack alignItems="center">
                    <IconButton
                        onPress={toggleColorMode}
                        name="sun"
                        color="white"
                        icon={
                            <Icon
                                as={
                                    <MaterialCommunityIcons name="theme-light-dark" />
                                }
                                size="md"
                                color="white"
                            />
                        }
                        _dark={{
                            name: "moon",
                            icon: (
                                <Icon
                                    as={
                                        <MaterialCommunityIcons name="weather-night" />
                                    }
                                    size="md"
                                    color="white"
                                />
                            ),
                        }}
                    />
                    <IconButton
                        name="logout"
                        color="white"
                        icon={
                            <Icon
                                as={<MaterialCommunityIcons name="logout" />}
                                size="sm"
                                color="white"
                            />
                        }
                    />
                </HStack>
            </HStack>
        </Box>
    );
};

export default HomeScreen;
