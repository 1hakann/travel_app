import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import { HeightSpacer } from '../../components'
import countries from '../../data/countries'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'

const Places = () => {
  return (
    <View>
        <HeightSpacer height={10} />
        <VirtualizedList 
            data={countries}
            horizontal
            keyExtractor={(item) => item.id}
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