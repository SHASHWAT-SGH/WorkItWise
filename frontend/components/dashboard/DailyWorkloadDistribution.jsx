import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WorkLoadPieChart from "./WorkLoadPieChart";
import colors from "../../global/colors";

const pieData = [
  {
    name: "Seoul",
    population: 21000,
    color: "#64b5f6",
    // legendFontColor: "#7F7F7F",
    // legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#5ea3d9",
    legendFontColor: "#5ea3d9",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "#517e9e",
    legendFontColor: "#517e9e",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#4b6c81",
    legendFontColor: "#4b6c81",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "#455a64",
    legendFontColor: "#455a64",
    legendFontSize: 15,
  },
];

const DailyWorkloadDistribution = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Today's workout</Text>
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
