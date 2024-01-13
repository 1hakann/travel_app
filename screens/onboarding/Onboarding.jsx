import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {

    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: "Find the perfect place to stay",
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: "Discover the world",
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: "Find the best Hotels in the world",
        }
    ];

    return (
        //FlatList will become
        <SafeAreaView style={styles.container}>
            <Text>Onboarding</Text>
        </SafeAreaView>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})