import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";

const NoticeBoardScreen = () => {
    const [noticeList, setNoticeList] = useState([]);
    const [newNotice, setNewNotice] = useState("");

    const handleAddNotice = () => {
        if (newNotice.trim() !== "") {
            setNoticeList([
                ...noticeList,
                { id: noticeList.length + 1, text: newNotice },
            ]);
            setNewNotice("");
        }
    };

    const handleDeleteNotice = (id) => {
        setNoticeList(noticeList.filter((item) => item.id !== id));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.noticeItem}
            onPress={() => handleDeleteNotice(item.id)}
        >
            <Text style={styles.noticeText}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notice Board</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Novo aviso"
                    value={newNotice}
                    onChangeText={(text) => setNewNotice(text)}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddNotice}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.noticeList}
                data={noticeList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: "#6600CC",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    noticeList: {
        width: "100%",
    },
    noticeItem: {
        backgroundColor: "#f0f0f0",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    noticeText: {
        fontSize: 16,
    },
});

export default NoticeBoardScreen;
