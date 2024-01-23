import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reuseable.style'
import { HeightSpacer, ReuseableText, Recommendations, BestHotels } from '../../components'
import Places from '../../components/Home/Places'
import { SIZES, COLORS, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
            <ReuseableText 
              text={'Hi Hakan!'}
              family={'Cera Pro Regular'}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity style={styles.box}
              onPress={() => navigation.navigate('Search')}
            >
              <AntDesign
                name='search1'
                size={26}

              />
            </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReuseableText 
              text={'Places'}
              family={'Cera Pro Medium'}
              size={SIZES.large}
              color={COLORS.black}
            />
        
        <Places />

        <HeightSpacer height={15} />

        <Recommendations />

        <HeightSpacer height={15} />

        <BestHotels />
      </View>
    </SafeAreaView>
  )
}

export default Home