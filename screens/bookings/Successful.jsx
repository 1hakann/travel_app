import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, HeightSpacer, ReuseableText, ReuseableTile, ReusebleButton } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import hotel from '../../data/hotel'

const Successful = ({ navigation }) => {
    return (
        <View>
            <View style={{ marginTop: "20%" }}>
                <AssetImage
                    data={require("../../assets/images/checked.png")}
                    width={"100%"}
                    height={200}
                    mode={"contain"}
                />

                <HeightSpacer height={40} />

                <View style={{ alignItems: "center" }}>
                    <ReuseableText
                        text={"Booking Successful"}
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
                        onPress={() => navigation.navigate("Bottom")}
                        btnText={"Done"}
                        width={SIZES.width - 50}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />

                </View>
            </View>
        </View>
    )
}

export default Successful

const styles = StyleSheet.create({})