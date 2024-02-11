import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import ReuseableTile from '../../components/Reusable/ReuseableTile'
import { COLORS, SIZES } from '../../constants/theme'
import recommendations from '../../data/recommendations'
import fetchRecommendations from '../../hook/fetchRecommendations'

const Recommended = ({ navigation }) => {
  const { recommendations, isLoading, error, refetch } = fetchRecommendations();

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

      {isLoading ? (<ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />)
        : (
          <View style={styles.secondView}>
            <FlatList
              data={recommendations}
              vertical
              keyExtractor={(item) => item._id}
              contentContainerStyle={{ rowGap: SIZES.medium }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ReuseableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
              )}
            />
          </View>
        )
      }
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