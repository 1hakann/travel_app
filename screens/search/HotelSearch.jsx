import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reuseable.style";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { AppBar, HeightSpacer, HotelCard } from "../../components";
import hotels from "../../data/hotels";

const HotelSearch = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SafeAreaView>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          left={20}
          right={20}
          title={'Look for hotels'}
          colorFirst={COLORS.white}
          icon={"filter"}
          colorSecond={COLORS.white}
          onPressFirst={() => navigation.goBack()}
          onPressSecond={() => { }}
        />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to stay"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"} />
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View style={{ paddingLeft: 12 }}>
          <FlatList
            data={hotels}
            keyExtractor={(item) => item._id}
            numColumns={2}
            ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
            renderItem={({ item }) => (
              <HotelCard
                item={item}
                margin={10}
                onPress={() => navigation.navigate("HotelDetails", item.id)}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

export default HotelSearch