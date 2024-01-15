import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styles from "./slides.style"

const Slides = ({item}) => {
    return (
        <View>
            <Image source={item.image} style={styles.image} />
        </View>
    )
}

export default Slides;

const style = StyleSheet.create({
    
})