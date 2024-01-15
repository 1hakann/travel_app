import React from "react";
import { StyleSheet, Text } from "react-native";

const ReuseableText = ({text, family, size, color}) => {
    return (
        <Text style={styles.textStyle(family, size, color)}>{text}</Text>
    )
}

export default ReuseableText;

const styles = StyleSheet.create({
    textStyle: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color
    })
})