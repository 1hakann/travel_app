import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import reuseable from "./reuseable.style";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReuseableText from "./ReuseableText";

const ProfileTile = () => {
  return (
    <TouchableOpacity style={styles.tile}>
      <View style={reuseable.rowWithSpace("space-between")}>
        <View style={reuseable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReuseableText
            text={title}
            family={"Cera Pro Regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <AntDesign name="right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
});
