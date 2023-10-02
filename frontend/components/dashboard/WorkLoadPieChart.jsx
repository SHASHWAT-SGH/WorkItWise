import { StyleSheet, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";

const WorkLoadPieChart = ({ pieData }) => {
  const chartConfig = {
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  return (
    <>
      <View style={styles.pieChartContainer}>
        <PieChart
          data={pieData}
          width={190}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          absolute
          style={{
            borderRadius: 12,
          }}
          hasLegend={false}
          center={[46, 0]}
        />
      </View>
    </>
  );
};

export default WorkLoadPieChart;

const styles = StyleSheet.create({
  pieChartContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    // backgroundColor: "red",
  },
});
