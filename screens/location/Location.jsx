import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
    title: "My Location"
  }

  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title} />
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject
  }
})