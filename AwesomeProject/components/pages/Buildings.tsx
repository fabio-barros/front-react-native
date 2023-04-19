import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
    Box,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
    Button,
    Fab,
    Center,
    Container,
    View,
    IconButton,
    ZStack,
    Modal,
    Slide,
    CheckIcon,
    Spinner,
    Skeleton,
    Alert,
    CloseIcon,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Building } from "../common/interfaces";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import BuildingEditModelSlide from "../BuildingEditModelSlide";
import { useQuery } from "@tanstack/react-query";
import { GetBuildingsOutPut, getBuildings } from "../../api/buldingApi";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";

type RootStackParamList = {
    Buildings: undefined;
    Apartments: { building: Building };
    CommonAreas: { building: Building };
    // define other screens here
};
type BuildingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const BuildingScreen = () => {
    const [buildings, setBuildings] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [isModalSlideOpen, setIsModalSlideOpen] = React.useState(false);

    const navigation = useNavigation<BuildingsScreenNavigationProp>();
    const { isLoading, error, data, isError, refetch } = useQuery<
        any,
        AxiosError<any, any>
    >(["buildings"], getBuildings);

    // retrieve building data from API or database
    useEffect(() => {
        const fetchBuildings = async () => {
            // code to fetch building data goes here
            const data = [
                {
                    name: "Edifício Tristeza",
                    description: "Lorem ipsum dolor sit amet",
                    street: "123 Main St",
                    zipcode: "12345",
                },
                {
                    name: "Building 2",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
                {
                    name: "Building 3",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
                {
                    name: "Building 4",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
                {
                    name: "Building 5",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
                {
                    name: "Building 6",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
                {
                    name: "Building 7",
                    description: "Consectetur adipiscing elit",
                    street: "456 Park Ave",
                    zipcode: "67890",
                },
            ];
            setBuildings(data);
        };

        fetchBuildings();
    }, []);

    const handleApartmentsPress = (building) => {
        navigation.navigate("Apartments", { building });
    };

    const handleCommonAreasPress = (building) => {
        navigation.navigate("CommonAreas", { building });
    };

    const renderEditModal = () => (
        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
            <Modal.Content>
                <Modal.Header>Editar informações do prédio</Modal.Header>
                <Modal.Body>
                    {/* Add your form or input fields here for editing building information */}
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group>
                        <Button
                            onPress={() => {
                                setShowEditModal(false);
                                setIsModalSlideOpen(false);
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            colorScheme="blue"
                            onPress={() =>
                                setIsModalSlideOpen(!isModalSlideOpen)
                            }
                        >
                            Salvar
                        </Button>
                    </Button.Group>
                </Modal.Footer>
                <BuildingEditModelSlide isModalSlideOpen={isModalSlideOpen} />
                {/* {isModalSlideOpen ? (
                    <BuildingEditModelSlide />
                ) : (
                    <HStack space={2} justifyContent="center">
                        <Spinner accessibilityLabel="Loading posts" />
                        <Heading color="primary.500" fontSize="md">
                            Loading
                        </Heading>
                    </HStack>
                )} */}
            </Modal.Content>
        </Modal>
    );

    const renderBuildingCard = ({ item }) => (
        <Box bg="white" shadow={3} rounded="lg" p={4} mb={4}>
            <HStack mb={2}>
                <Icon
                    as={<MaterialCommunityIcons name="office-building" />}
                    size="md"
                    mr={2}
                    color="blue.500"
                />
                <Heading size="md">{item.name}</Heading>
            </HStack>
            <Text fontSize="md" mb={2}>
                {item.description}
            </Text>
            <HStack space={4}>
                <Text fontSize="md">{item.street}</Text>
                <Text fontSize="md">{item.zipcode}</Text>
            </HStack>
            <Button mt={4} onPress={() => handleApartmentsPress(item)}>
                Apartmentos
            </Button>
            <Button mt={2} onPress={() => handleCommonAreasPress(item)}>
                Áreas Comuns
            </Button>
            <IconButton
                onPress={() => setShowEditModal(true)}
                variant="solid"
                icon={
                    <Icon as={AntDesign} name="edit" size="sm" color="white" />
                }
                bg="blue.500"
                _pressed={{ bg: "blue.600" }}
                mt={4}
                size="sm"
            />

            {renderEditModal()}
        </Box>
    );

    if (isLoading) {
        return (
            <Center w="100%" h="100%">
                <Spinner accessibilityLabel="Carregando Prédios..." />
                <Heading color="primary.500" fontSize="lg">
                    Carregando Prédios...
                </Heading>
            </Center>
        );
    }
    if (isError) {
        return (
            <Alert w="100%" status="warning">
                <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                        flexShrink={1}
                        space={2}
                        justifyContent="space-between"
                    >
                        <HStack space={2} flexShrink={1}>
                            <Alert.Icon mt="1" />
                            <Text fontSize="md" color="coolGray.800">
                                {error.message}
                            </Text>
                        </HStack>
                        <IconButton
                            onPress={() => {
                                refetch;
                            }}
                            variant="unstyled"
                            _focus={{
                                borderWidth: 0,
                            }}
                            icon={<CloseIcon size="3" />}
                            _icon={{
                                color: "coolGray.600",
                            }}
                        />
                    </HStack>
                </VStack>
            </Alert>
        );
    }

    return (
        <SafeAreaView>
            <ReactQueryDevtools initialIsOpen={false} />

            <HStack>
                <IconButton
                    shadow={2}
                    size="sm"
                    icon={
                        <Icon
                            color="white"
                            as={AntDesign}
                            name="plus"
                            size="sm"
                        />
                    }
                    style={styles.floatingMenuButtonStyle}
                />
            </HStack>
            <FlatList
                data={data.data}
                renderItem={renderBuildingCard}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 16,
    },
    floatingMenuButtonStyle: {
        backgroundColor: "#00BFFF",
        padding: 10,
        margin: 16,
    },
});

export default BuildingScreen;
