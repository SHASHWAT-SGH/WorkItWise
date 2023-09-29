import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WorkoutAnalytics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your workout analytics</Text>
    </View>
  );
};

export default WorkoutAnalytics;

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 40,
    // paddingRight: 40,
    marginTop: 20,
    marginLeft: 15,
    width: 250,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    // textAlign: "center",
  },
});
