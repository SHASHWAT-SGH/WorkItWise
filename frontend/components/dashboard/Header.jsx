import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({
  title,
  openDrawer,
  backIcon,
  navigation,
  exerciseCount,
  showProfileImage,
}) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.wrapper}>
        {!backIcon ? (
          <TouchableOpacity onPress={openDrawer}>
            <Feather name="menu" size={32} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>
        )}
        <View style={styles.nameWrapper}>
          <Text style={[styles.textColor1, styles.headerTextHome]}>
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Text>
          {exerciseCount ? (
            <Text style={{ color: "gray", marginLeft: 20 }}>
              {exerciseCount} exercises
            </Text>
          ) : null}
        </View>
        {!showProfileImage ? null : (
          <View style={styles.userNameIcon}>
            <Text style={[styles.textColor1, styles.userNameLetter]}>S</Text>
          </View>
        )}
      </View>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.shadowOverlay}
      />
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
    marginTop: 0,
  },
  headerWrapper: {
    height: 60,
    // backgroundColor: "red",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTextHome: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    textTransform: "capitalize",
  },
  userNameIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#7f7fff",
    marginLeft: "auto",
    marginRight: 10,
  },
  userNameLetter: {
    flex: 1,
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    textAlignVertical: "center",
  },
  shadowOverlay: {
    position: "absolute",
    bottom: -12,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 17, // Adjust the height of the shadow as needed
  },
  nameWrapper: {
    // backgroundColor: "red",
  },
});
