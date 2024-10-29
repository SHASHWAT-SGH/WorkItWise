import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const Card = () => {
  return (
    <View style={styles.conatiner}>
      <ImageBackground
        source={{
          uri: "https://cdn.dummyjson.com/recipe-images/1.webp",
        }}
        style={styles.image}
      >
        <View
          style={{
            alignItems: "flex-end",
            paddingRight: wp(3),
          }}
        >
          <Text
            style={{
              fontWeight: 600,
            }}
          >
            30 min
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.heading, { fontWeight: 800 }]}>adf</Text>
          <Text
            style={{
              fontWeight: 600,
              fontSize: hp(2.5),
            }}
          >
            adf
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  conatiner: {
    // backgroundColor: "red",
    // padding: hp(1),
    borderRadius: hp(0.4),
  },
  image: {
    borderRadius: hp(0.4),
    height: imageHeight,
    width: imageWidth,
  },
  wrapper: {
    position: "absolute",
    bottom: hp(2),
    marginLeft: wp(3),
  },
  heading: {
    fontSize: hp(3),
  },
});
