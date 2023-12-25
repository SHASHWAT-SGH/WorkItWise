import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";

const MyBezierLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={{
          // backgroundColor: "black",
          // backgroundGradientFrom: "#474747",
          // backgroundGradientTo: "#474747",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 28,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const WorkoutsPerWeek = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.fontColor1, styles.heading]}>Workouts per week</Text>
      <MyBezierLineChart />
    </View>
  );
};

export default WorkoutsPerWeek;

const styles = StyleSheet.create({
  fontColor1: {
    color: "white",
  },
  container: {
    // backgroundColor: "red",
    marginTop: 24,
    marginLeft: 12,
    marginRight: 12,
  },
  heading: {
    fontSize: 21,
    fontWeight: "400",
  },
});
