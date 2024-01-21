import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./slides.style"
import { HeightSpacer, ReuseableText, ReusebleButton } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from '@react-navigation/native';

const Slides = ({item}) => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.stack}>
                <ReuseableText 
                    text={item.title}
                    family={"Cera Pro Medium"}
                    size={SIZES.xxLarge}
                    color={COLORS.white}
                />

                <HeightSpacer height={40} />

                <ReusebleButton
                    onPress={() => navigation.navigate('Bottom')}
                    btnText={"Let's Go"}
                    width={(SIZES.width-50) / 2.2}
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