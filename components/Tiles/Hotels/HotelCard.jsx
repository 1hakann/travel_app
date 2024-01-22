import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import { NetworkImage, HeightSpacer, Rating, ReuseableText } from "../../../components/index";

const HotelCard = ({ item, margin }) => {
  return (
    <TouchableOpacity style={styles.card(margin)}>
        <View>
            <View style={styles.imageContainer}>
                <NetworkImage
                    source={item.imageUrl}
                    width={'80%'}
                    height={'80%'}
                    radius={16}
                />
            </View>

            <HeightSpacer height={5} />

            <View style={{ padding: 10 }}>
                <ReuseableText
                    text={item.title}
                    family={"Cera Pro Medium"}
                    size={SIZES.medium}
                    color={COLORS.black}
                />

                <HeightSpacer height={5} />

                <ReuseableText
                    text={item.location}
                    family={"Cera Pro Medium"}
                    size={SIZES.medium}
                    color={COLORS.gray}
                />

                <HeightSpacer height={5} />

                <Rating />
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width / 2.2,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        marginRight: margin
    }),

    imageContainer: {
        alignItems: "center",
        marginTop: 10,
        height: 150,
    }
})