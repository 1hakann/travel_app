import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./slides.style"
import { ReuseableText, ReusebleButton } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({item}) => {
    return (
        <View>
            <Image source={item.image} style={styles.image} />
            <View>
                <ReuseableText 
                    style={styles.stack}
                    text={item.title}
                    family={'Cera Pro Medium'}
                    size={SIZES.xxLargexLarge}
                    color={COLORS.white}
                />

                <ReusebleButton
                    onPress={() => {}}
                    btnText={"Let's Go"}
                    width={(SIZES.width-50)/2.2}
                    backgroundColor={COLORS.red}
                    borderColor={COLORS.red}
                    borderWidth={0}
                    textColor={COLORS.white}
                />
            </View>
        </View>
    )
}

export default Slides;