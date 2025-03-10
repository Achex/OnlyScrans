import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";

const UserPage = ({ route }) => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const handleReport = () => {
        // Add your report handling logic here
        alert("Reported!");
    };

    const handleMessage = () => {
        // Add your message handling logic here
        alert("Message sent!");
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
            <TouchableOpacity style={localStyles.button} onPress={handleBack}>
                <Text style={localStyles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.reportButton} onPress={handleReport}>
                <Text style={localStyles.buttonText}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.messageButton} onPress={handleMessage}>
                <Text style={localStyles.buttonText}>Message</Text>
            </TouchableOpacity>
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
});

export default UserPage;
