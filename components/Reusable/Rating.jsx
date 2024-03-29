import { StyleSheet, View } from 'react-native'
import React from 'react'
import reusable from './reuseable.style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import ReuseableText from './ReuseableText'

const Rating = ({ rating }) => {
  return (
    <View style={reusable.rowWithSpace('flex-start')}>
        <MaterialCommunityIcons
            name='star'
            size={20}
            color={'#fd9942'}
        />
        <WidthSpacer width={5} />

        <ReuseableText 
            text={rating}
            family={'Cera Pro Medium'}
            size={15}
            color={"#FD9942"}
        />
    </View>
  )
}

export default Rating;

const styles = StyleSheet.create({})