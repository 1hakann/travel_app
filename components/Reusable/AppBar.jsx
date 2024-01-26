import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reuseable.style';
import { COLORS, TEXT } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import ReuseableText from './ReuseableText';

const AppBar = ({colorFirst, colorSecond, title, icon, onPressFirst, onPressSecond}) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWithSpace('space-between')}>
        <TouchableOpacity style={styles.box(colorFirst)} onPress={onPressFirst}>
            <AntDesign
                name='left'
                size={26}
            />
        </TouchableOpacity>

        <ReuseableText 
            text={title}
            family={'Cera Pro Medium'}
            size={TEXT.large}
            color={COLORS.black}
        />

        <TouchableOpacity style={styles.boxInline(colorSecond)} onPress={onPressSecond}>
              <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        justifyContent: "center",
    },

    box: (colorFirst) => ({
        backgroundColor: colorFirst,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center"
    }),

    boxInline: (colorSecond) => ({
        backgroundColor: colorSecond,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center"
    }),
})