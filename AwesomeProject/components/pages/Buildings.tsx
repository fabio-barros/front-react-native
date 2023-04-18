import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
    Box,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
    NativeBaseProvider,
    extendTheme,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Building } from "../common/interfaces";

// define the color scheme based on indigo
const theme = extendTheme({
    colors: {
        primary: {
            50: "#e8eaf6",
            100: "#c5cbe9",
            200: "#9fa8da",
            300: "#7985cb",
            400: "#5c6bc0",
            500: "#3f51b5",
            600: "#3949ab",
            700: "#303f9f",
            800: "#283593",
            900: "#1a237e",
        },
    },
});
type RootStackParamList = {
    Buildings: undefined;
    Apartments: { building: Building };
    // define other screens here
};
type BuildingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;
const BuildingsScreen = () => {
    const navigation = useNavigation<BuildingsScreenNavigationProp>();

    const [buildings, setBuildings] = useState([
        {
            id: 1,
            name: "Building A",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            street: "123 Main St",
            zipcode: "12345",
        },
        {
            id: 2,
            name: "Building B",
            description:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            street: "456 Oak St",
            zipcode: "67890",
        },
        {
            id: 3,
            name: "Building C",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            street: "789 Elm St",
            zipcode: "24680",
        },
    ]);

    // navigate to the Apartments screen for the selected building
    const handlePressBuilding = (building: Building) => {
        navigation.navigate("Apartments", { building });
    };

    // render each building card in the FlatList
    const renderBuildingCard = ({ item }) => (
        <Box bg="white" shadow={3} rounded="lg" p={4} mb={4}>
            <HStack mb={2}>
                <Icon
                    as={<MaterialCommunityIcons name="office-building" />}
                    size="md"
                    mr={2}
                    color="primary.500"
                />
                <Heading size="md">{item.name}</Heading>
            </HStack>
            <Text fontSize="md" mb={2}>
                {item.description}
            </Text>
            <Text fontSize="md" mb={2}>
                {item.street}
            </Text>
            <Text fontSize="md" mb={2}>
                {item.zipcode}
            </Text>
            <Box mt={4}>
                <Text
                    fontSize="sm"
                    color="primary.500"
                    onPress={() => handlePressBuilding(item)}
                >
                    View Apartments
                </Text>
            </Box>
        </Box>
    );

    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1} bg="primary.100">
                <FlatList
                    data={buildings}
                    renderItem={renderBuildingCard}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.list}
                />
            </Box>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default BuildingsScreen;
