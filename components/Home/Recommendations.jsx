import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reuseable.style';
import ReuseableText from '../Reusable/ReuseableText';
import { TEXT, COLORS, SIZES } from '../../constants/theme';
import { Feather } from '@expo/vector-icons'
import recommendations from '../../data/recommendations';
import ReuseableTile from '../Reusable/ReuseableTile';

const Recommendations = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 10}]}>
            <ReuseableText 
              text={'Recommendations'}
              family={'Cera Pro Medium'}
              size={TEXT.large}
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
          data={recommendations}
          horizontal
          keyExtractor={(item) => item.id }
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ReuseableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item.id)} />
          )}
        />
    </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10
    }
})