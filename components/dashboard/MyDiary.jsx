import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MyDiary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={[styles.fontColor2, styles.myDiaryText]}>MyDiary</Text>
        <AntDesign name="right" size={24} color="#836ce0" />
      </View>
    </View>
  );
};

export default MyDiary;

const styles = StyleSheet.create({
  fontColor2: { color: "#836ce0" },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    marginTop: 28,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#38304d",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  myDiaryText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});