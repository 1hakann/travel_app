import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./search.style"
import reusable from '../../components/Reusable/reuseable.style'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { HeightSpacer, ReuseableTile } from '../../components'
import search from '../../data/search'

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='Where do you want to visit'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name='search' size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {search.length === 0 ? (
        <View>
          <HeightSpacer height={'20%'} />
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <ReuseableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item.id)} />
            </View>
          )}
        />
      )}

    </SafeAreaView>
  )
}

export default Search