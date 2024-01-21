import React from "react";
import { StyleSheet, Text } from "react-native";

const ReuseableText = ({text, family, size, color, align}) => {
    return (
        <Text style={styles.textStyle(family, size, color, align)}>{text}</Text>
    )
}

export default ReuseableText;

const styles = StyleSheet.create({
    textStyle: (family, size, color, align) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
        textAlign: align,
    })
})