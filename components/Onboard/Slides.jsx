import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styles from "./slides.style"
import { Reuseable } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({item}) => {
    return (
        <View>
            <Image source={item.image} style={styles.image} />
            <View>
                <Reuseable 
                    style={styles.stack}
                    text={item.title}
                    family={'Cera Pro Medium'}
                    size={SIZES.xxLargexLarge}
                    color={COLORS.white}
                />
            </View>
        </View>
    )
}

export default Slides;