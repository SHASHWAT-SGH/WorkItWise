import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";
import globalStyles from "../../global/styles";
import colors from "../../global/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
          {legends.map((item, index) => {
            return (
              <View key={index} style={styles.legendWrapper}>
                <View
                  style={[
                    styles.legendBox,
                    { backgroundColor: sliceColor[index] },
                  ]}
                ></View>
                <Text style={styles.legendText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default WorkLoadDistribution;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    backgroundColor: colors.dark2,
    padding: wp(4),
    borderRadius: wp(3),
  },
  heading: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2.7),
    marginBottom: wp(4),
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  left: {
    // backgroundColor: "red",
    flex: 1,
  },
  right: {
    // backgroundColor: "green",
    flex: 0.7,
    paddingLeft: wp(20),
    paddingTop: wp(5),
  },
  legendWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: wp(1),
    // backgroundColor: "green",
  },
  legendBox: {
    // backgroundColor: "red",
    width: wp(3),
    height: wp(3),
    marginRight: wp(1.4),
  },
  legendText: {
    color: colors.white,
    fontSize: hp(2),
    fontFamily: globalStyles.fonts.font_400,
    textTransform: "capitalize",
  },
});
