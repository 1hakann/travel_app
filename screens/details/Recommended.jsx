import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import ReuseableTile from '../../components/Reusable/ReuseableTile'
import { COLORS, SIZES } from '../../constants/theme'
import recommendations from '../../data/recommendations'

const Recommended = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstView}>
        <AppBar 
          title={'Recommendation'} 
          colorFirst={COLORS.white} 
          icon={'search1'} 
          colorSecond={COLORS.white}
          onPressFirst={() => navigation.goBack()}
          onPressSecond={() => navigation.navigate('Search')}
          />
      </View>

      <View style={styles.secondView}>
         <FlatList 
          data={recommendations}
          vertical
          keyExtractor={(item) => item.id }
          contentContainerStyle={{ rowGap: SIZES.medium }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ReuseableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item.id)} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Recommended

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,

  },

  firstView: {
    height: 50,
  },

  secondView: {
    paddingTop: 20,
  }
})