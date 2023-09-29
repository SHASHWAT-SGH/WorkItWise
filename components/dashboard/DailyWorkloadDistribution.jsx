import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkLoadPieChart from "./WorkLoadPieChart";

const pieData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    // legendFontColor: "#7F7F7F",
    // legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
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

const DailyWorkloadDistribution = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Daily workout division</Text>
      </View>
      <WorkLoadPieChart pieData={pieData} />
    </View>
  );
};

export default DailyWorkloadDistribution;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    padding: 12,
    margin: 12,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#38304d",
    borderRadius: 12,
  },

  headingContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    backgroundColor: "green",
  },
  heading: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
});
