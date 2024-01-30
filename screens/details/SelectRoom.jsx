import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, ReusebleButton, HeightSpacer, ReuseableTile } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import rooms from '../../data/rooms'

const SelectRoom = ({ navigation }) => {
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={60}
          left={20}
          right={20}
          title={"Select Room"}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <FlatList
        data={rooms}
        showsVerticalScrollIndicator
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tileColumn}>
            <View style={styles.tile}>
              <ReuseableTile item={item} />
              <View style={styles.btnStyle}>
                <ReusebleButton
                  onPress={() => navigation.navigate("SelectedRoom", {item})}
                  btnText={"Select Room"}
                  width={SIZES.width - 50}
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default SelectRoom

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