import React, { useState, useEffect, FC } from "react";
import { StyleSheet } from "react-native";
import {
    FlatList,
    Box,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Building } from "../common/interfaces";

interface ApartmentsScreenProps {
    building: Building;
}

const ApartmentsScreen: FC<ApartmentsScreenProps> = ({ building }) => {
    const [apartments, setApartments] = useState([]);
    const { name, description, street, zipcode } = building;
    // retrieve apartment data for the selected building
    useEffect(() => {
        const fetchApartments = async () => {
            // code to fetch apartment data for the selected building goes here
            const data = [
                { number: "101", floor: "1", isOccupied: true },
                { number: "102", floor: "1", isOccupied: false },
                { number: "201", floor: "2", isOccupied: true },
                { number: "202", floor: "2", isOccupied: false },
                { number: "301", floor: "3", isOccupied: true },
                { number: "302", floor: "3", isOccupied: true },
            ];
            setApartments(data);
        };

        fetchApartments();
    }, [name, description, street, zipcode]);

    // render each apartment card in the FlatList
    const renderApartmentCard = ({ item }) => (
        <Box bg="white" shadow={3} rounded="lg" p={4} mb={4}>
            <HStack mb={2}>
                <Icon
                    as={<MaterialCommunityIcons name="home" />}
                    size="md"
                    mr={2}
                    color="blue.500"
                />
                <Heading size="md">Apartment {item.number}</Heading>
            </HStack>
            <Text fontSize="md" mb={2}>
                Floor {item.floor}
            </Text>
            <Text fontSize="md" mb={2}>
                {item.isOccupied ? "Occupied" : "Available"}
            </Text>
        </Box>
    );

    return (
        <Box flex={1} bg="white">
            <Heading size="md" mb={4} px={4}>
                Apartments in {name}
            </Heading>
            <FlatList
                data={apartments}
                renderItem={renderApartmentCard}
                keyExtractor={(item) => item.number}
                contentContainerStyle={styles.list}
            />
        </Box>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default ApartmentsScreen;
