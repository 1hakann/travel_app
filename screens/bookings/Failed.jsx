import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, HeightSpacer, ReuseableText, ReuseableTile, ReusebleButton } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import hotel from '../../data/hotel'

const Failed = ({ navigation }) => {
    return (
        <View>
            <View style={{ marginTop: "20%" }}>
                <AssetImage
                    data={require("../../assets/images/Falied.png")}
                    width={"100%"}
                    height={200}
                    mode={"contain"}
                />

                <HeightSpacer height={40} />

                <View style={{ alignItems: "center" }}>
                    <ReuseableText
                        text={"Booking Failed"}
                        family={"Cera Pro Medium"}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                    />

                    <HeightSpacer height={20} />

                    <ReuseableText
                        text={"You can find your booking details below"}
                        family={"Cera Pro Regular"}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />

                    <HeightSpacer height={20} />
                </View>
                <View style={{ margin: 20 }}>
                    <ReuseableText
                        text={"Room Details"}
                        family={"Cera Pro Bold"}
                        size={SIZES.medium}
                        color={COLORS.dark}
                    />

                    <HeightSpacer height={20} />

                    <ReuseableTile item={hotel} />

                    <HeightSpacer height={40} />

                    <ReusebleButton
                        onPress={() => navigation.goBack()}
                        btnText={"Try again"}
                        width={SIZES.width - 50}
                        backgroundColor={COLORS.red}
                        borderColor={COLORS.red}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </View>
    )
}

export default Failed

const styles = StyleSheet.create({})