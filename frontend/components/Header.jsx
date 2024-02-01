import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../global/colors";
import globalStyles from "../global/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = ({ showMenu, screenName, showUserIcon }) => {
  return (
    <View style={styles.navBar}>
      {/* menu icon */}
      {showMenu ? (
        <Pressable
          android_ripple={{ color: colors.white, radius: 15 }}
          style={styles.navBtn}
        >
          <View style={styles.menuIcon}>
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
          </View>
        </Pressable>
      ) : null}
      {/* Name of Screen */}
      <View style={styles.screenName}>
        <Text style={globalStyles.h1}>{screenName}</Text>
      </View>
      {/* User Icon */}
      {showUserIcon ? (
        <View style={styles.userNameIcon}>
          <Text style={[styles.userNameLetter]}>S</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navBar: {
    height: hp(4.6),
    // flex: 0.1,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: hp(2.4),
    // backgroundColor: "green",
  },
  navBtn: {
    width: wp(6.6),
    borderRadius: 6,
  },
  menuIcon: {
    flexDirection: "row",
    columnGap: 1.8,
    flexWrap: "wrap",
  },
  screenName: { flex: 1, alignItems: "center" },
  userNameIcon: {
    width: wp(9),
    height: wp(9),
    borderRadius: 8,
    backgroundColor: colors.dark2,
    marginLeft: "auto",
    marginRight: 10,
  },
  userNameLetter: {
    flex: 1,
    fontSize: hp(3.4),
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.white,
    fontFamily: globalStyles.fonts.font_400,
  },
});
