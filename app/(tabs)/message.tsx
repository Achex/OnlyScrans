import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

const MessageScreen = ({ route }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { formData } = route.params;
    const [messages, setMessages] = useState([
        { id: "1", name: "Dave", message: "Hey, that food that i bought was really nice and cheap" },
        { id: "2", name: "Bob", message: "Yo that scran was burnt" },
        { id: "3", name: "gregory", message: "i am gregory" },
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={localStyles.messageItem}>
            <Text style={localStyles.name}>{item.name}</Text>
            <Text style={localStyles.message}>{item.message}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { paddingTop: 40 }]}>
            <FlatList data={messages} renderItem={renderItem} keyExtractor={(item) => item.id} />
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Main", { formData: formData })}>
                    <Text style={styles.bottomBarButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("MessageScreen", { formData: formData })}>
                    <Text style={styles.bottomBarButtonText}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Profile", { formData: formData })}>
                    <Text style={styles.bottomBarButtonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Sell", { formData: formData })}>
                    <Text style={styles.bottomBarButtonText}>Sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    messageItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    message: {
        fontSize: 14,
        color: "#555",
    },
});

export default MessageScreen;
