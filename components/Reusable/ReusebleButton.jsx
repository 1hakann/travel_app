import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SIZES } from "../../constants/theme";

const ReusebleButton = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
        >
            <Text style={styles.btnText()}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ReusebleButton;

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "Cera Pro Medium",
        fontSize: SIZES.medium,
        color: textColor
    }),

    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth,
    })
})