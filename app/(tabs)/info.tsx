import React from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

const imageMap = {
    "beans.png": require("@/assets/images/beans.png"),
    "cookies.jpg": require("@/assets/images/cookies.jpg"),
    "cake.jpg": require("@/assets/images/cake.jpg"),
    "eggs.jpeg": require("@/assets/images/eggs.jpeg"),
    "samosa.jpg": require("@/assets/images/samosa.jpg"),
    "sourdough.jpg": require("@/assets/images/sourdough.jpg"),
    "smoothies.jpeg": require("@/assets/images/smoothies.jpeg"),
    "pasta.jpg": require("@/assets/images/pasta.jpg"),
    "rice.jpeg": require("@/assets/images/rice.jpeg"),
    "freezer.jpeg": require("@/assets/images/freezer.jpeg"),
    "apples.jpg": require("@/assets/images/apples.jpg"),
    "tuna.jpg": require("@/assets/images/tuna.jpg"),
    "potnoodles.jpg": require("@/assets/images/potnoodles.jpg"),
};

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    InfoPage: { info: any };
    UserInfo: { userId: any };
};

type InfoPageNavigationProp = StackNavigationProp<RootStackParamList, "InfoPage">;
type InfoPageRouteProp = RouteProp<RootStackParamList, "InfoPage">;

const InfoPage = ({ route }: { route: InfoPageRouteProp }) => {
    const navigation = useNavigation<InfoPageNavigationProp>();
    const { info } = route.params;

    const handleAddToCart = () => {
        // Add to cart functionality here
        console.log("Added to cart");
    };

    const handleUserPress = () => {
        navigation.navigate("UserInfo", { userId: info.userId });
    };

    return (
        <View style={[styles.container, { padding: 20 }]}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Text style={localStyles.title}>{info.Title}</Text>
            <Text style={localStyles.label}>Location:</Text>
            <Text style={localStyles.value}>{info.university}</Text>
            <Text style={localStyles.label}>User:</Text>
            <TouchableOpacity style={localStyles.userContainer} onPress={handleUserPress}>
                <Text style={localStyles.value}>{info.User}</Text>
                <View style={localStyles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <Icon key={index} name="star" size={20} color="gold" />
                    ))}
                </View>
            </TouchableOpacity>
            <Text style={localStyles.label}>Date:</Text>
            <Text style={localStyles.value}>{info.Date}</Text>
            <Text style={localStyles.label}>Description:</Text>
            <Text style={localStyles.value}>{info.description}</Text>
            <TouchableOpacity style={localStyles.button} onPress={handleAddToCart}>
                <Text style={localStyles.buttonText}>Add to Cart {info.price}</Text>
            </TouchableOpacity>
            <Image source={imageMap[info.image]} style={styles.image} />
        </View>
    );
};

const localStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: "center",
    },
    button: {
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
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    stars: {
        flexDirection: "row",
        marginLeft: 5,
        bottom: 2,
    },
});

export default InfoPage;
