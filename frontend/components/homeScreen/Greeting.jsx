import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../global/styles";
import colors from "../../global/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Greeting = () => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.greet}>Hey Shashwat!</Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  welcome: {
    color: colors.dimWhite,
    fontFamily: globalStyles.fonts.font_300,
    fontSize: hp(2.5),
  },
  greet: {
    marginTop: 4,
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(3),
  },
});
