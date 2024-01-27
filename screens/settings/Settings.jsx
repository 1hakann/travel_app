import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { AppBar, HeightSpacer, ReuseableText, SettingTile } from "../../components/index";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          color={COLORS.white}
          onPressFirst={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ReuseableText
          text={"Account Settings"}
          family={"Cera Pro Regular"}
          size={SIZES.xLarge }
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTile titleFirst={"Language"} />

        <HeightSpacer height={3} />

        <SettingTile titleFirst={"Country"} titleSecond={"Turkey"} />

        <HeightSpacer height={3} />

        <SettingTile titleFirst={"Currency"} title1={"TL"} />

        <HeightSpacer height={40} />


        <ReuseableText
          text={"Support"}
          family={"Cera Pro Regular"}
          size={SIZES.xLarge }
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTile titleFirst={"Get Help"} titleSecond={""} />

        <HeightSpacer height={3} />

        <SettingTile titleFirst={"Give a feedback"} titleSecond={""} />

        <HeightSpacer height={40} />

        <ReuseableText
          text={"Legal"}
          family={"Cera Pro Regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTile titleFirst={"Terms of Service"} titleSecond={""} />

        <HeightSpacer height={3} />

        <SettingTile titleFirst={"Privacy Policy"} titleSecond={""} />
      </View>
    
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
