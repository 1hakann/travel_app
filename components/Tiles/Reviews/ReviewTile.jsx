import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './review.style'
import reusable from '../../Reusable/reuseable.style'
import NetworkImage from '../../Reusable/NetworkImage'
import WidthSpacer from '../../Reusable/WidthSpacer'
import ReuseableText from '../../Reusable/ReuseableText'
import { COLORS, SIZES } from '../../../constants/theme'
import Rating from '../../Reusable/Rating'
import DescriptionText from '../../Reusable/DescriptionText'

const ReviewTile = ({ review }) => {
    return (
        <View style={styles.reviewBorder}>
            <View style={reusable.rowWithSpace("space-between")}>
                <View style={reusable.rowWithSpace("flex-start")}>
                    <NetworkImage
                        source={review.user.profile}
                        width={54}
                        height={54}
                        radius={10}
                    />

                    <WidthSpacer width={20} />

                    <View style={{ width: "80%" }}>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReuseableText
                                text={review.user.username}
                                family={"Cera Pro Medium"}
                                size={SIZES.small + 2}
                                color={COLORS.black}
                            />
                            <WidthSpacer width={"30%"} />

                            <View style={reusable.rowWithSpace("space-between")}>
                                <Rating rating={review.rating} />
                                <WidthSpacer width={10} />
                                <ReuseableText
                                    text={review.updatedAt}
                                    family={"Cera Pro Medium"}
                                    size={SIZES.small + 2}
                                    color={COLORS.black}
                                />
                            </View>

                        </View>
                        <DescriptionText text={review.review} lines={2}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReviewTile