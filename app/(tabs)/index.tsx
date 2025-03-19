import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Image, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { ThemedView } from "@/components/ThemedView";
import styles from "../styles";
import MainScreen from "./main";
import InfoPage from "./info";
import UserPage from "./user";
import MessageScreen from "./message";
import Profile from "./profile";

const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <Stack.Navigator initialRouteName="StepOne" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StepOne" component={StepOneScreen} options={{ headerShown: false }} />
            <Stack.Screen name="StepTwo" component={StepTwoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="InfoPage" component={InfoPage} />
            <Stack.Screen name="UserInfo" component={UserPage} />
            <Stack.Screen name="MessageScreen" component={MessageScreen} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

const StepOneScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({
        email: "example@gmail.com",
        confirmEmail: "example@gmail.com",
        password: "securepassword",
        confirmPassword: "securepassword",
    });

    const handleNext = () => {
        const { email, confirmEmail, password, confirmPassword } = formData;
        if (!email || !confirmEmail || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required.");
            return;
        }
        if (email !== confirmEmail) {
            Alert.alert("Error", "Emails do not match.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        navigation.navigate("StepTwo", { formData });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                <Text style={{ fontWeight: "bold", bottom: 20, fontSize: 30, marginVertical: 10 }}>Welcome!</Text>
                <Text style={{ fontWeight: "bold", bottom: 20, fontSize: 18, marginVertical: 10 }}>Step 1: Create Account</Text>
                <View style={styles.modalContent}>
                    <Text>Email:</Text>
                    <TextInput style={[styles.input, { borderRadius: 10 }]} value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} />
                    <Text>Confirm Email:</Text>
                    <TextInput style={[styles.input, { borderRadius: 10 }]} value={formData.confirmEmail} onChangeText={(text) => setFormData({ ...formData, confirmEmail: text })} />
                    <Text>Password:</Text>
                    <TextInput style={[styles.input, { borderRadius: 10 }]} secureTextEntry value={formData.password} onChangeText={(text) => setFormData({ ...formData, password: text })} />
                    <Text>Confirm Password:</Text>
                    <TextInput
                        style={[styles.input, { borderRadius: 10 }]}
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                    />
                    <Button title="Next" onPress={handleNext} />
                </View>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

const StepTwoScreen = ({ route, navigation }) => {
    const { formData } = route.params;
    const [updatedFormData, setFormData] = useState({
        ...formData,
        firstName: "example",
        lastName: "person",
        age: "20",
        university: "University of Bath",
    });

    const handleAgeChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        setFormData({ ...updatedFormData, age: numericValue });
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disclaimerVisible, setDisclaimerVisible] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = () => {
        const { firstName, lastName, age, university } = updatedFormData;
        if (!firstName || !lastName || !age || !university) {
            Alert.alert("Error", "All fields are required.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("Main", { formData: updatedFormData });
        }, 1000);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <>
                        <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                        <Text style={{ fontWeight: "bold", bottom: 20, fontSize: 30, marginVertical: 10 }}>Welcome!</Text>
                        <Text style={{ fontWeight: "bold", bottom: 20, fontSize: 18, marginVertical: 10 }}>Step 2: Link University</Text>
                        <View style={styles.modalContent}>
                            <Text>First Name:</Text>
                            <TextInput style={[styles.input, { borderRadius: 10 }]} value={updatedFormData.firstName} onChangeText={(text) => setFormData({ ...updatedFormData, firstName: text })} />
                            <Text>Last Name:</Text>
                            <TextInput style={[styles.input, { borderRadius: 10 }]} value={updatedFormData.lastName} onChangeText={(text) => setFormData({ ...updatedFormData, lastName: text })} />
                            <Text>Age:</Text>
                            <TextInput
                                style={[styles.input, { borderRadius: 10 }]}
                                value={updatedFormData.age}
                                onChangeText={handleAgeChange}
                                keyboardType="numeric" // Ensure numeric keyboard is shown
                            />
                            <Text>University:</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.input, { borderRadius: 10, justifyContent: "center" }]}>
                                <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>{updatedFormData.university || "Select University"}</Text>
                            </TouchableOpacity>
                            <Modal visible={modalVisible} transparent={true} animationType="slide">
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <Picker
                                            selectedValue={updatedFormData.university}
                                            onValueChange={(itemValue) => {
                                                setFormData({ ...updatedFormData, university: itemValue });
                                                setModalVisible(false);
                                            }}
                                            style={styles.picker}
                                            itemStyle={styles.pickerItem}
                                        >
                                            <Picker.Item label="University of Bath" value="University of Bath" />
                                            <Picker.Item label="University of Bristol" value="University of Bristol" />
                                            <Picker.Item label="University of Cambridge" value="University of Cambridge" />
                                            <Picker.Item label="University of Warwick" value="University of Warwick" />
                                        </Picker>
                                        <Button title="Close" onPress={() => setModalVisible(false)} />
                                    </View>
                                </View>
                            </Modal>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <Button title="Back" onPress={() => navigation.goBack()} />
                                <Button title="Submit" onPress={() => setDisclaimerVisible(true)} />
                            </View>
                        </View>
                    </>
                )}
                <Modal visible={disclaimerVisible} transparent={true} animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Disclaimer</Text>
                            <Text style={{ marginBottom: 20 }}>Use at your own risk. By proceeding, you agree to our terms and conditions.</Text>

                            <Button
                                title="I agree to the terms and conditions"
                                onPress={() => {
                                    setAgreeToTerms(true);
                                    setDisclaimerVisible(false);
                                    handleSubmit();
                                }}
                            />
                            <Button title="Cancel" onPress={() => setDisclaimerVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default HomeScreen;
