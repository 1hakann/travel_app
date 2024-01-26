import { View, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AppBar, HeightSpacer, NetworkImage, ReuseableText } from "../components";
import styles from "./topTab.style";
import TopBookings from "../screens/top/TopBookings";
import TopInfo from "../screens/top/TopInfo";
import TopTrips from "../screens/top/TopTrips";
import { COLORS, SIZES } from "../constants/theme";
const Tab = createMaterialTopTabNavigator();

// https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://github.com/1hakann/1hakann/blob/master/pexels-eberhard-grossgasteiger-629167.jpg?raw=true"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            colorFirst={COLORS.white}
            icon={"logout"}
            colorSecond={COLORS.white}
            onPressSecond={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://hakancakmak.com/storage/hero/3/rm17ApSk3yxgheUoeCElnrnamWnIeA-metabWUucG5n-.png",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReuseableText
                text={"Hakan Çakmak"}
                family={"Cera Pro Medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReuseableText
                  text={"hakan.cakmak@live.com"}
                  family={"Cera Pro Medium"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
