import { StyleSheet, Text, View, VirtualizedList, ActivityIndicator } from 'react-native'
import React from 'react'
import { HeightSpacer } from '../../components'
import countries from '../../data/countries'
import { COLORS, SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'
import fetchCountries from '../../hook/fetchCountries'

const Places = () => {
  const { countries, isLoading, isError, refetch } = fetchCountries();

  if(isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
  }

  return (
    <View>
        <HeightSpacer height={10} />
        <VirtualizedList 
            data={countries}
            horizontal
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false}
            getItemCount={(data) => data.length}
            getItem={(data, index) => data[index]} 
            renderItem={({item, index}) => (
                <View style={{ marginRight: SIZES.medium }}>
                    <Country item={item} />
                </View>
            )}
         /> 
    </View>
  )
}

export default Places