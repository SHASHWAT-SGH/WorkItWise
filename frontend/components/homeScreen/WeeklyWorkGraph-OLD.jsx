import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../global/colors";
import { BarChart } from "react-native-chart-kit";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WeeklyWorkGraph = () => {
  const chartConfig = {
    backgroundGradientFrom: colors.dark2,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: colors.dark2,
    fillShadowGradientOpacity: 1,
    color: () => colors.dark1,
    // fillShadowGradient: colors.dark1,
    fillShadowGradientOpacity: 1,
    labelColor: () => "#558BE5",
    barPercentage: 0.4,
    barRadius: 5,
    propsForBackgroundLines: {
      strokeWidth: 0.5,
      strokeDasharray: null,
      stroke: colors.dark1,
    },
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        // style={graphStyle}
        data={data}
        width={wp(85)}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        showValuesOnTopOfBars={true}
        showBarTops={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
      />
    </View>
  );
};

export default WeeklyWorkGraph;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    backgroundColor: colors.dark2,
    padding: wp(4),
    borderRadius: wp(3),
  },
});
