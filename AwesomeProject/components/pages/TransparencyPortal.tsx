import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TransparencyPortalScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transparency Portal</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Financial Reports</Text>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>2022 Annual Report</Text>
                    <Text style={styles.itemDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Q1 2023 Report</Text>
                    <Text style={styles.itemDescription}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                    </Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Environmental Reports</Text>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>
                        2022 Environmental Impact Report
                    </Text>
                    <Text style={styles.itemDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>
                        Q1 2023 Environmental Report
                    </Text>
                    <Text style={styles.itemDescription}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: 14,
    },
});

export default TransparencyPortalScreen;
