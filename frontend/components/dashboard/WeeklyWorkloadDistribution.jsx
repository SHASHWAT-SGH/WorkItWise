import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkLoadPieChart from "./WorkLoadPieChart";
import colors from "../../global/colors";

const pieData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "#0b1d78",
    // legendFontColor: "#7F7F7F",
    // legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#0045a5",
    legendFontColor: "#645a9e",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "#553de3",
    legendFontColor: "#553de3",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#3112e3",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const WeeklyWorkloadDistribution = () => {
  return (
    <View style={styles.container}>
      <WorkLoadPieChart pieData={pieData} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>This weeks workout</Text>
      </View>
    </View>
  );
};

export default WeeklyWorkloadDistribution;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    padding: 12,
    margin: 12,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.dark1,
    borderRadius: 12,
  },

  headingContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  heading: {
    fontSize: 26,
    color: colors.dimWhite,
    fontWeight: "bold",
  },
});
