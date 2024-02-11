import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AppBar, DescriptionText, HeightSpacer, NetworkImage, PopularList, ReuseableText, ReusebleButton } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../../components/Reusable/reuseable.style";
import { Feather } from "@expo/vector-icons";
import country from "../../data/country";
import fetchCountry from "../../hook/fetchCountry";

const CountryDetail = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  console.log(id)
  
  const { country, isLoading, error, refetch  } = fetchCountry();


  return (
    <ScrollView>
      <View>
      <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={country.country}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View style={styles.description}>
        <ReuseableText
          text={country.region}
          family={"Cera Pro Medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={{ alignContent: "center" }}>
            <HeightSpacer height={20} />

            <View style={reusable.rowWithSpace("space-between")}>
            <ReuseableText
              text={"Popular Destinations"}
              family={"Cera Pro Medium"}
              size={TEXT.large}
              color={COLORS.black}
            />
            
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>


          <HeightSpacer height={20} />

          <PopularList data={country.popular} />

          <ReusebleButton
            onPress={() => navigation.navigate("HotelSearch", id)}
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

export default CountryDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
})