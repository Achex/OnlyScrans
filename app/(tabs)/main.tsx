import React, { useState } from "react";
import { Text, Image, ScrollView, Modal, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemedView } from "@/components/ThemedView";
import styles from "../styles";
import mockData from "./mockData";
import { useNavigation, NavigationProp } from "@react-navigation/native";

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

type RootStackParamList = {
    InfoPage: { info: { id: number; university: string; Title: string; User: string; Date: string; image: string; price: string; description: string } };
};

const MainScreen = ({ route }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { formData } = route.params;
    const [search, setSearch] = useState("");
    const [university, setUniversity] = useState(formData.university);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholderTextColor="darkgrey" placeholder="Search..." value={search} onChangeText={setSearch} />
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.input, { borderRadius: 10, justifyContent: "center" }]}>
                        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>{university || "Select University"}</Text>
                    </TouchableOpacity>
                    <Modal visible={modalVisible} transparent={true} animationType="slide">
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Picker
                                    selectedValue={university}
                                    onValueChange={(itemValue) => {
                                        setUniversity(itemValue);
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
                </View>
                {mockData
                    .filter((x) => x.university === university)
                    .filter((x) => x.Title.toLowerCase().includes(search.toLowerCase()))
                    .map((data, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate("InfoPage", { info: data, formData: formData })}>
                            <ThemedView key={index} style={styles.container}>
                                <Image source={imageMap[data.image]} style={styles.image} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={[styles.title, { fontStyle: "normal", textAlign: "left", flex: 1, left: 20 }]}>{data.Title}</Text>
                                    <Text style={[styles.price, { textAlign: "right", flex: 1, right: 20 }]}>{data.price}</Text>
                                </View>
                            </ThemedView>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
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

export default MainScreen;
