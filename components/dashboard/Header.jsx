import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Feather name="menu" size={32} color="white" />
        </TouchableOpacity>
        <Text style={[styles.textColor1, styles.headerTextHome]}>Home</Text>
        <View style={styles.userNameIcon}>
          <Text style={[styles.textColor1, styles.userNameLetter]}>S</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textColor1: {
    color: "white",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },
  headerWrapper: {
    flex: 0.07,

    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTextHome: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
  },
  userNameIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#7f7fff",
    marginLeft: 210,
  },
  userNameLetter: {
    flex: 1,
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
