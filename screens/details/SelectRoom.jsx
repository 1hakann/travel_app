import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage } from '../../components'

const SelectRoom = () => {
  return (
    <View>
      <AssetImage
        data={require('../../assets/images/icons/checked.png')}
        width={300}
        height={300}
      />
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({})