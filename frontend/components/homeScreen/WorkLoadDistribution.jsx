import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const WorkLoadDistribution = () => {
  const widthAndHeight = wp(47);
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];
  const legends = ["back", "chest", "head", "cardio", "leg"];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Workload Distribution</Text>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
        <View style={styles.right}>
          {legends &&
            legends.map((item, index) => (
              <View key={index} style={styles.legendWrapper}>
                <View
                  style={[
                    styles.legendColor,
                    { backgroundColor: sliceColor[index] },
                  ]}
                />
                <Text style={styles.legendText}>{item}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  wrapper: {
    flexDirection: "row",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    justifyContent: "center",
  },
  legendWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
});

export default WorkLoadDistribution;
