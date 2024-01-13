import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Slides = ({item}) => {
    return (
        <View>
            <Image source={item.image} />
        </View>
    )
}

export default Slides;

const style = StyleSheet.create({
    
})