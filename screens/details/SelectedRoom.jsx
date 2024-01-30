import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import { AppBar, ReusebleButton, HeightSpacer, ReuseableTile, AssetImage, NetworkImage, Rating, ReuseableText, WidthSpacer, Counter } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from '../../components/Reusable/reuseable.style';

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={60}
          left={20}
          right={20}
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReuseableText
                text={item.title}
                family={"Cera Pro Regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReuseableText
                  text={item.title}
                  family={"Cera Pro Medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReuseableText
              text={item.location}
              family={"Cera Pro Medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReuseableText
              text={"Room Requirements"}
              family={"Cera Pro Regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReuseableText
                text={"Price per night"}
                family={"Cera Pro Regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReuseableText
                text={"$ 400"}
                family={"Cera Pro Regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReuseableText
                text={"Payment Method"}
                family={"Cera Pro Regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  mode={"contain"}
                  width={30}
                  height={20}
                  data={require("../../assets/images/Visa.png")}
                />

                <ReuseableText
                  text={"Visa"}
                  family={"Cera Pro Regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReuseableText
                text={"4 Guest"}
                family={"Cera Pro Regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>

            <HeightSpacer height={30} />

            <ReusebleButton
              onPress={() => navigation.navigate("Successful")}
              btnText={"Book Now"}
              width={SIZES.width - 60}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SelectedRoom

const styles = StyleSheet.create({
  tileColumn: {
    marginHorizontal: 20,
    marginBottom: 10
  },

  tile: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12
  },

  btnStyle: {
    margin: 10,
    alignItems: "center"
  }
});