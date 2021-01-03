import React from 'react'
import { Text, TouchableOpacity, Image, View, ScrollView, StyleSheet } from 'react-native'
import image from '../../assets/online-shopping.png'

export default function OnlineShoppingScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>ONLINE SHOPPING</Text>
            <Text style={styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took
            </Text>
            <Image
                source={image}
                style={styles.image} />
            <TouchableOpacity onPress={() => navigation.navigate("AddToCart")} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <View style={styles.notification}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
                <View style={styles.view3}></View>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentSuccessful")}>
                    <Text style={styles.notificationText}>Skip</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 28
    },
    image: {
        height: 350,
        width: 300,
        marginBottom: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 16,
        color: "gray",
        marginBottom: 20
    },

    buttonContainer: {
        width: 170,
        height: 50,
        borderRadius: 60,
        backgroundColor: "#985EDC",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 70
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    notification: {
        flexDirection: "row",
        marginLeft: 100,
        justifyContent: "center",
        alignItems: "center"
    },

    view1: {
        width: 30,
        height: 10,
        backgroundColor: "#985EDC",
        borderRadius: 15,
        marginLeft: 30
    },

    view2: {
        width: 10,
        height: 10,
        backgroundColor: "#88878A",
        borderRadius: 5,
        marginHorizontal: 2
    },

    view3: {
        width: 10,
        height: 10,
        backgroundColor: "#88878A",
        borderRadius: 5,
        marginHorizontal: 2
    },
    notificationText: {
        color: "#88878A",
        marginLeft: 86
    }
})