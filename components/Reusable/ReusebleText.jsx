import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Reuseable = (text, family, size, color) => {
    return (
        <Text style={styles.textStyle(family, size, color)}>{text}</Text>
    )
}

export default Reuseable;

const styles = StyleSheet({
    textStyle: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color
    })
})