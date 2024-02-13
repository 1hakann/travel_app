import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

const HotelMap = ({coordinates}) => {
  const initial = {
    id: "65c3c9809321cbe336d93d96",
    latitude: 37.7749,
    latitudeDelta: 0.01,
    longitude: -122.4194,
    longitudeDelta: 0.01,
    name: "Hotel Califonia",
  };

  if(coordinates === undefined){
    return (
      <ActivityIndicator />
    )
  }

  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.maps} initialRegion={initial}>
        <Marker coordinate={coordinates} title={undefined ? coordinates.name : "Hotel Destination"} />
      </MapView>
    </TouchableOpacity>
  )
}

export default HotelMap

const styles = StyleSheet.create({
    maps: {
        marginVertical: 10,
        height: 120,
        width: "100%",
        borderRadius: 12,
    }
})