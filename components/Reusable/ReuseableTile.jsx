import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import reusable from './reuseable.style'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {NetworkImage, WidthSpacer, ReuseableText, HeightSpacer, Rating} from '../../components/index'

const ReuseableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={reusable.rowWithSpace('flex-start')}>
            <NetworkImage source={item?.imageUrl} width={80} height={80} radius={12} />

            <WidthSpacer width={15} />

            <View>
                <ReuseableText 
                  text={item?.title}
                  family={'Cera Pro Medium'}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
                <HeightSpacer height={8} />

                <ReuseableText 
                  text={item?.location}
                  family={'Cera Pro Medium'}
                  size={14}
                  color={COLORS.gray}
                />

                <HeightSpacer height={8} />

                <View style={reusable.rowWithSpace('flex-start')}>
                    <Rating rating={item?.rating} />
                    <WidthSpacer width={5} />
                    <ReuseableText 
                      text={`(${item?.review})`}
                      family={'Cera Pro Medium'}
                      size={14}
                      color={COLORS.gray}
                    />
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ReuseableTile

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    }
})