import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reuseable.style'
import { ReuseableText } from '../../components'
import { SIZES, COLORS } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'

const Home = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
            <ReuseableText 
              text={'Hey User!'}
              family={'Cera Pro Regular'}
              size={SIZES.xxLarge}
              color={COLORS.white}
            />

            <TouchableOpacity style={styles.box}>
              <AntDesign
                name='search1'
                size={26}

              />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home