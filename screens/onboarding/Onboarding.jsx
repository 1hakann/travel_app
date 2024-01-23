import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slides } from "../../components";
import slides from "../../data/slides";


const Onboarding = () => {

    return (
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Slides item={item} /> }
        />
    )
}

export default Onboarding;