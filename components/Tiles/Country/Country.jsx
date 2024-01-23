import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import { NetworkImage, ReuseableText, HeightSpacer} from '../../../components/index'
import { useNavigation } from '@react-navigation/native'

const Country = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CountryDetail', {item})}>
        <View>
            <NetworkImage source={item.imageUrl} width={85} height={85} radius={12} />
            
            <HeightSpacer height={5} />
            <ReuseableText 
              text={item.country}
              family={'Cera Pro Regular'}
              size={SIZES.medium}
              color={COLORS.black}
              align={"center"}
            />
        </View>
    </TouchableOpacity>
  )
}

export default Country