import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";

const UserPage = ({ route }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("");

    const handleBack = () => {
        navigation.goBack();
    };

    const handleReport = () => {
        // Add your report handling logic here
        alert("Reported!");
    };

    const handleMessage = () => {
        setModalVisible(true);
    };

    const sendMessage = () => {
        // Add your message sending logic here
        alert(`Message sent: ${message}`);
        setModalVisible(false);
        setMessage("");
    };

    return (
        <View style={styles.container}>
            <Image source={require("@/assets/images/bloke.jpg")} style={[styles.logo, { width: 200, height: 200 }]} />
            <Text style={localStyles.name}>John Doe</Text>
            <Text style={localStyles.info}>Age: 20</Text>
            <Text style={localStyles.info}>Location: University of Warwick</Text>
            <Text style={localStyles.info}>Rating:</Text>
            <View style={localStyles.stars}>
                {[...Array(5)].map((_, index) => (
                    <Icon key={index} name="star" size={20} color="gold" />
                ))}
            </View>
            <View style={localStyles.buttonContainer}>
                <TouchableOpacity style={localStyles.button} onPress={handleBack}>
                    <Text style={localStyles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={localStyles.button} onPress={handleMessage}>
                    <Text style={localStyles.buttonText}>Message</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[localStyles.button, { backgroundColor: "red" }]} onPress={handleReport}>
                    <Text style={localStyles.buttonText}>Report</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={localStyles.modalView}>
                    <Text style={localStyles.modalText}>Type your message:</Text>
                    <TextInput style={localStyles.input} onChangeText={setMessage} value={message} placeholder="Enter message" />
                    <Button title="Send" onPress={sendMessage} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Main", { formData: { university: "University of Bath" } })}>
                    <Text style={styles.bottomBarButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("MessageScreen")}>
                    <Text style={styles.bottomBarButtonText}>Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.bottomBarButtonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate("Sell")}>
                    <Text style={styles.bottomBarButtonText}>Sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    name: {
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    info: {
        fontSize: 18,
        marginVertical: 5,
        textAlign: "center",
    },
    stars: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
        margin: 10,
    },
    reportButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    messageButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        width: "100%",
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
});

export default UserPage;
