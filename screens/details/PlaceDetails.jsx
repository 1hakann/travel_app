import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import place from '../../data/place'
import { AppBar, DescriptionText, HeightSpacer, NetworkImage, PopularList, ReuseableText, ReusebleButton } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reuseable.style'
import { Feather } from '@expo/vector-icons'

const PlaceDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params;

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={place.title}
          colorFirst={COLORS.white}
          icon={"search1"}
          colorSecond={COLORS.white}
          onPressFirst={() => navigation.goBack()}
          onPressSecond={() => navigation.navigate('HotelSearch')}
        />
      </View>

      <HeightSpacer height={15} />

      <View style={styles.description}>
        <ReuseableText
          text={place.location}
          family={"Cera Pro Medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <DescriptionText text={place.description} />

        <HeightSpacer height={20} />
        <View style={{ alignContent: "center" }}>

          <View style={reusable.rowWithSpace("space-between")}>
            <ReuseableText
              text={"Popular Hotels"}
              family={"Cera Pro Medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => { }}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={place.popular} />

          <ReusebleButton
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />

          <HeightSpacer height={50} />
        </View>
      </View>

    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})