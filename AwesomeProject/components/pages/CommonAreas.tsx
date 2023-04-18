import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";

const CommonAreaBookingScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCommonArea, setSelectedCommonArea] = useState(null);
    const [commonAreaAvailability, setCommonAreaAvailability] = useState([]);

    const fetchCommonAreaAvailability = () => {
        // Fetch availability data for the selected date and common area
        const availabilityData = [
            {
                id: 1,
                dateTime: new Date(selectedDate + " 10:00:00"),
                availableCount: 10,
            },
            {
                id: 2,
                dateTime: new Date(selectedDate + " 14:00:00"),
                availableCount: 5,
            },
            {
                id: 3,
                dateTime: new Date(selectedDate + " 18:00:00"),
                availableCount: 2,
            },
        ];

        setCommonAreaAvailability(availabilityData);
    };
    useEffect(() => {
        fetchCommonAreaAvailability();
    }, [selectedDate, selectedCommonArea]);

    const handleBooking = () => {};

    return (
        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                <View style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={(day) => setSelectedDate(day.dateString)}
                    />
                </View>
            </View>
            <View style={styles.commonAreaListContainer}>
                <TouchableOpacity
                    style={styles.commonAreaButton}
                    onPress={() => setSelectedCommonArea("Event Hall")}
                >
                    <Text style={styles.commonAreaButtonText}>
                        Salão de Eventos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.commonAreaButton}
                    onPress={() => setSelectedCommonArea("Gym")}
                >
                    <Text style={styles.commonAreaButtonText}>Academia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.commonAreaButton}
                    onPress={() => setSelectedCommonArea("Pool")}
                >
                    <Text style={styles.commonAreaButtonText}>Piscina</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.availabilityContainer}>
                {commonAreaAvailability.map((availability) => (
                    <TouchableOpacity
                        key={availability.id}
                        style={styles.availabilityButton}
                        onPress={() => setSelectedCommonArea(availability)}
                    >
                        <Text style={styles.availabilityText}>
                            {availability.dateTime.toLocaleString()}
                        </Text>
                        <Text style={styles.availabilityText}>
                            Available: {availability.availableCount}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={styles.bookButton}
                onPress={handleBooking}
                disabled={!selectedCommonArea}
            >
                <Text style={styles.bookButtonText}>Agendar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    calendarContainer: {},
    commonAreaListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20,
        width: "100%",
        paddingHorizontal: 20,
    },
    commonAreaButton: {
        height: 50,
        width: "30%",
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    commonAreaButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    availabilityContainer: {
        flex: 1,
        width: "100%",
    },
    availabilityButton: {
        height: 50,
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    availabilityText: {
        fontSize: 16,
    },
    bookButton: {
        backgroundColor: "#6600CC",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        width: "90%",
        // opacity: selectedCommonArea ? 1 : 0.5,
    },
    bookButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default CommonAreaBookingScreen;
