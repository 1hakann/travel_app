import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/theme';
import { AppBar, ReuseableTile } from '../../components/index'
import hotels from '../../data/hotels';

const HotelList = ({navigation}) => {

    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <View style={styles.firstView}>
                <AppBar
                    top={10}
                    left={0}
                    right={0}
                    title={"Nearby Hotels"}
                    colorFirst={COLORS.white}
                    icon={"search1"}
                    colorSecond={COLORS.white}
                    onPressFirst={() => navigation.goBack()}
                    onPressSecond={() => navigation.navigate('HotelSearch')}
                />
            </View>

            <View style={styles.secondView}>
                <FlatList
                    data={hotels}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                            <ReuseableTile
                                item={item}
                                onPress={() => navigation.navigate("HotelDetails", item.id)}
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default HotelList

const styles = StyleSheet.create({
    firstView: {
        height: 50,
    },

    secondView: {
        paddingTop: 20,
    }
})