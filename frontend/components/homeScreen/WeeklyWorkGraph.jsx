import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../global/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import globalStyles from "../../global/styles";

const Bar = ({ fill }) => {
  fill = fill == null ? 0 : fill;
  const unitBarHeight = hp(2.8);
  const partition = 7;
  return (
    <>
      <View style={barStyle.BarContainer}>
        <View style={[barStyle.bar, { height: unitBarHeight * partition }]}>
          <View
            style={[
              barStyle.bar,
              barStyle.filledBar,
              {
                height: fill * unitBarHeight,
              },
            ]}
          />
        </View>
        <View
          style={[
            barStyle.dot,
            fill === 0 ? null : { backgroundColor: colors.yellow1 },
          ]}
        >
          <View style={barStyle.filledDot} />
        </View>
      </View>
    </>
  );
};

const WeeklyWorkGraph = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        <View style={styles.graphArea}>
          <ScrollView horizontal={true}>
            <View style={styles.graphScrollView}>
              <Bar fill={5} />
              <Bar fill={7} />
              <Bar fill={6} />
              <Bar fill={5} />
              <Bar fill={4} />
              <Bar fill={7} />
              <Bar fill={2} />
              <Bar fill={1} />
              <Bar fill={4} />
              <Bar />
              <Bar fill={2} />
              <Bar fill={5} />
              <Bar fill={7} />
              <Bar fill={6} />
              <Bar fill={5} />
              <Bar fill={4} />
              <Bar fill={7} />
              <Bar fill={2} />
              <Bar fill={1} />
              <Bar fill={4} />
              <Bar />
              <Bar fill={2} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.yAxisMarkArea}>
          <Text style={styles.yAxisMark}>7</Text>
          <Text style={styles.yAxisMark}>6</Text>
          <Text style={styles.yAxisMark}>5</Text>
          <Text style={styles.yAxisMark}>4</Text>
          <Text style={styles.yAxisMark}>3</Text>
          <Text style={styles.yAxisMark}>2</Text>
          <Text style={styles.yAxisMark}>1</Text>
          <Text style={styles.yAxisMark}>0</Text>
        </View>
      </View>
    </View>
  );
};

export default WeeklyWorkGraph;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    // backgroundColor: colors.dark2,
    padding: wp(4),
    borderRadius: wp(3),
  },
  graphContainer: {
    flexDirection: "row",
  },
  graphArea: {
    // backgroundColor: "red",
    flex: 5,
  },
  graphScrollView: {
    flexDirection: "row",
    gap: wp(4),
    overflow: "hidden",
  },
  yAxisMarkArea: {
    flex: 0.3,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
  },
  yAxisMark: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_400,
  },
});

const barStyle = StyleSheet.create({
  BarContainer: {
    gap: wp(2),
  },
  bar: {
    width: wp(2.5),
    backgroundColor: colors.dark2,
    borderRadius: wp(2.5),
    position: "relative",
    overflow: "hidden",
  },
  filledBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.yellow1,
  },
  dot: {
    backgroundColor: colors.dark2,
    borderRadius: wp(2.5),
    height: wp(2.5),
    width: wp(2.5),
    overflow: "hidden",
    marginBottom: 3,
  },
  filledDot: {
    flex: 1,
  },
});
