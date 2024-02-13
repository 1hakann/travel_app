import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import ReuseableText from '../Reusable/ReuseableText';
import { COLORS, SIZES } from '../../constants/theme';
import { Feather } from '@expo/vector-icons'
import reusable from '../Reusable/reuseable.style';
import { useNavigation } from '@react-navigation/native'
import hotels from '../../data/hotels';
import HotelCard from '../Tiles/Hotels/HotelCard';
import fetchHotels from '../../hook/fetchHotel';
import HorizontalShimmer from '../Shimmers/HorizontalShimmer';

const BestHotels = () => {
    const navigation = useNavigation();
    const { hotels, isLoading, error, refetch } = fetchHotels(1);
    return (
        <View>
            <View style={[reusable.rowWithSpace('space-between'), { paddingBottom: 10 }]}>
                <ReuseableText
                    text={'Nearby'}
                    family={'Cera Pro Medium'}
                    size={SIZES.large}
                    color={COLORS.black}
                />

                <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
                    <Feather
                        name='list'
                        size={20}
                    />
                </TouchableOpacity>
            </View>

            {isLoading ? (
                <HorizontalShimmer
                    horizontal={true}
                    width={SIZES.width / 2.2}
                    height={SIZES.height / 3.8}
                    radius={12}
                    paddingTop={12}
                />
            ) : (
                <FlatList
                    data={hotels}
                    horizontal
                    keyExtractor={(item) => item._id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    renderItem={({ item }) => (
                        <HotelCard item={(item)} margin={10} onPress={() => navigation.navigate('HotelDetail', item._id)} />
                    )}
                />
            )}
        </View>
    )
}

export default BestHotels