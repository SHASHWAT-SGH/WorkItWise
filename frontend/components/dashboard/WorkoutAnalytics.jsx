import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../global/colors";

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
    marginTop: 20,
    marginLeft: 15,
    width: 250,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
});
