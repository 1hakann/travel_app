import { FlatList, View } from 'react-native'
import React from 'react';
import ReuseableTile from '../../components/Reusable/ReuseableTile'
import places from '../../data/places';

const TopTrips = ({navigation}) => {
  return (
    <View style={{margin: 20}}>

      <FlatList 
      data={places}
      showVerticalScrollIndicator={false}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=> (
        <View style={{marginBottom: 10}}>
          <ReuseableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item.id)}/>
        </View>
      )}
      />
      
    </View>
  )
}

export default TopTrips