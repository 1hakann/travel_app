import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, TEXT } from "../../../constants/theme";
import ReuseableText from "../../Reusable/ReuseableText";
import WidthSpacer from "../../Reusable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";
import reusable from "../../Reusable/reuseable.style";

const SettingTile = ({ titleFirst, titleSecond, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReuseableText
        text={titleFirst}
        family={"Cera Pro Regular"}
        size={TEXT.large}
        color={COLORS.dark}
      />

      {titleFirst === "Language" ? (
        <View style={reusable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../assets/images/turkey.jpg")}
            style={styles.image}
          />
          <WidthSpacer width={5} />
          <ReuseableText
            text={"Turkisch"}
            family={"Cera Pro Regular"}
            size={TEXT.large}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      ) : (
        <View style={reusable.rowWithSpace("flex-start")}>
          <ReuseableText
            text={titleSecond}
            family={"Cera Pro Regular"}
            size={TEXT.large}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
  },
  image: { width: 40, height: 30, resizeMode: "contain" },
});
