import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import ReuseableText from '../Reusable/ReusebleText';
import { COLORS, SIZES } from '../../constants/theme';
import { Feather } from '@expo/vector-icons'
import reusable from '../Reusable/reuseable.style';
import { useNavigation } from '@react-navigation/native'
import hotels from '../../data/hotels';
import HotelCard from '../Tiles/Hotels/HotelCard';

const BestHotels = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 10}]}>
                <ReuseableText 
                  text={'Nearby'}
                  family={'Cera Pro Medium'}
                  size={SIZES.large}
                  color={COLORS.black}
                />
    
                <TouchableOpacity onPress={() => navigation.navigate('Recommended')}>
                    <Feather 
                        name='list'
                        size={20}
                    />
                </TouchableOpacity>
            </View>

            <FlatList 
                data={hotels}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator
                contentContainerStyle={{ columnGap: SIZES.small }}
                renderItem={({item}) => (
                    <HotelCard item={(item)} margin={10} onPress={() => navigation.navigate('HotelDetail')} />
                )}
            />
        </View>
      )
}

export default BestHotels