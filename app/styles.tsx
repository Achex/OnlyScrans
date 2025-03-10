import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: "100%", // Make input take full width
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
    picker: {
        height: 50,
        width: "100%",
        color: "#000", // Ensure text color is visible
    },
    pickerItem: {
        height: 44,
        color: "#000", // Ensure text color is visible
    },
    logo: {
        width: 100,
        height: 100,
        bottom: 70,
        borderRadius: 10, // Rounded edges
        alignSelf: "center",
        marginBottom: 20,
    },
    image: {
        width: "90%",
        height: 200,
        borderRadius: 10, // Rounded edges
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        fontFamily: "Bold", // Change font
    },
    scrollContainer: {
        top: 40, // Prevents content from being cut off at the top
        paddingBottom: 20, // Prevents content from being cut off at the bottom
    },
    searchContainer: {
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    price: {
        fontSize: 16,
        color: "grey",
        marginLeft: 10,
        marginBottom: 10,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "lightgrey",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    bottomBarButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomBarButtonText: {
        fontSize: 18,
        color: "black",
    },
});

export default styles;
