import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import reuseable from '../../components/Reusable/reuseable.style';
import { ReusebleButton, ReuseableTile } from '../../components';
import hotels from '../../data/hotels';

const TopBookings = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16 }}>
            <ReuseableTile item={item} />

            <View style={[reuseable.rowWithSpace('space-between'), { margin: 10 }]}>

              <ReusebleButton
                onPress={() => navigation.navigate("SelectRoom")}
                btnText={"Details"}
                width={(SIZES.width - 50) / 2.2}
                backgroundColor={COLORS.white}
                borderColor={COLORS.blue}
                borderWidth={0.5}
                textColor={COLORS.blue}
              />

              <ReusebleButton
                onPress={() => navigation.navigate("SelectRoom")}
                btnText={"Cancel"}
                width={(SIZES.width - 50) / 2.2}
                backgroundColor={COLORS.red}
                borderColor={COLORS.red}
                borderWidth={0}
                textColor={COLORS.white}
              />

            </View>
          </View>
        )}
      />

    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})