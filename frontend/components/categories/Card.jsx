import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../global/colors";
import globalStyles from "../../global/styles";
import { Image } from "expo-image";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image
          source={require("../../assets/extras/chest.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.nameHolder}>
        <Text style={styles.text}>Card</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark2,
    width: wp(37),
    height: wp(42),
    borderRadius: wp(2),
    padding: wp(2),
  },
  imageHolder: {
    // backgroundColor: "white",
    flex: 4.2,
  },
  nameHolder: {
    // backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2),
    color: colors.white,
  },
  image: {
    flex: 1,
    // width: "100%",
    // backgroundColor: "red",
  },
});
