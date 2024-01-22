import { FlatList, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ReuseableTile from '../Reusable/ReuseableTile';

const PopularList = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReuseableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item.id)} />
    </View>
  )

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  )
}

export default PopularList

