import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reuseable.style'
import { HeightSpacer, ReuseableText, Places } from '../../components'
import { SIZES, COLORS } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
            <ReuseableText 
              text={'Hey User!'}
              family={'Cera Pro Medium'}
              size={SIZES.large}
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
              family={'Cera Pro Regular'}
              size={SIZES.large}
              color={COLORS.black}
            />
        
        <Places />
      </View>
    </SafeAreaView>
  )
}

export default Home