import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button } from "react-native-paper";
const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require("../assets/home_bg.jpg")}
                    style={styles.image}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => navigation.navigate("CommonAreaBooking")}
                    >
                        Áreas Comuns
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("MaintenanceBooking")
                        }
                    >
                        Manutenção
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("TransparencyPortal")
                        }
                    >
                        Portal da transparência
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => navigation.navigate("Announcements")}
                    >
                        Quadro de Avisos
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => navigation.navigate("CondoRules")}
                    >
                        Regras do Condomínio
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => navigation.navigate("NewScreen")}
                    >
                        New Screen
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    imageContainer: {
        height: "40%",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    buttonContainer: {
        height: "60%",
        backgroundColor: "#fff",
        border: "1px solid green",
        padding: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 60,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        height: 0,
        backgroundColor: "#000",
    },
    button: {
        borderRadius: 10,
        // paddingVertical: 50,
        // paddingHorizontal: 1,
        wift: 100,
        height: 100,
        marginHorizontal: 5,
        marginVertical: 10,
        backgroundColor: "#6600cc",
        width: (screenWidth - 60) / 3,
    },
});

export default HomeScreen;
