import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppBar, DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReuseableText, ReusebleButton } from '../../components/index'
import { Rating } from 'react-native-stock-star-rating'
import reusable from '../../components/Reusable/reuseable.style'
import { COLORS, SIZES } from '../../constants/theme';
import styles from './hotelDetail.style';
import hotel from '../../data/hotel'
import { Feather } from '@expo/vector-icons'
import ReviewsList from '../../components/Hotel/ReviewsList'

const HotelDetail = ({ navigation }) => {

  let coordinates = {
    id: hotel.id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          colorFirst={COLORS.white}
          icon={"search1"}
          colorSecond={COLORS.white}
          onPressFirst={() => navigation.goBack()}
          onPressSecond={() => { }}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReuseableText
                text={hotel.title}
                family={"Cera Pro Medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />
              <ReuseableText
                text={hotel.location}
                family={"Cera Pro Medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={15} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReuseableText
                  text={`(${hotel.review})`}
                  family={"Cera Pro Medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReuseableText
            text={"Description"}
            family={"Cera Pro Medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReuseableText
            text={"Location"}
            family={"Cera Pro Medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReuseableText
            text={hotel.location}
            family={"Cera Pro Regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWithSpace('space-between')}>
            <ReuseableText
              text={'Reviews'}
              family={"Cera Pro Medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <TouchableOpacity>
              <Feather name='list' size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewsList reviews={hotel.reviews} />
        </View>

        <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
          <View>
            <ReuseableText
              text={`\$ ${hotel.price}`}
              family={"Cera Pro Medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <HeightSpacer height={5} />

            <ReuseableText
              text={"Jan 01 - Dec 25"}
              family={"Cera Pro Medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReusebleButton
          onPress={() => navigation.navigate("SelectRoom")}
          btnText={"Select Room"}
          width={(SIZES.width - 50)/2.2}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
        </View>
      </View>
    </ScrollView>
  )
}

export default HotelDetail