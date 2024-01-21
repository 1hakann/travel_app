import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Detail = () => {
  const route = useRoute();
  const { item } = route.params.item;
  console.log(item)
  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})