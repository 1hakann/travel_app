import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reuseable.style';
import ReuseableText from '../Reusable/ReusebleText';
import { COLORS, SIZES } from '../../constants/theme';
import { Feather } from '@expo/vector-icons'

const Recommendations = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
            <ReuseableText 
              text={'Places'}
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
    </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})