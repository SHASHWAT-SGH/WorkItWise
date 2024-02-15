import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../global/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import globalStyles from "../../global/styles";

const Card = ({ date, category, count }) => {
  return (
    <View style={cardStyles.container}>
      <View style={{ flex: 2.2 }}>
        <Text style={cardStyles.dateText}>{date}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={cardStyles.categoryText}>{category}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={cardStyles.countText}>{count} exercise</Text>
      </View>
    </View>
  );
};

const PreviousWorkouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.heading}>Previous Workouts</Text>
        </View>
        <View style={styles.topRight}>
          <TouchableOpacity onPress={() => console.log("clicked")}>
            <Text style={styles.allBtn}>All {" >"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* cards */}
      <ScrollView horizontal={true}>
        <Card date={"8 February"} category={"Back"} count={3} />
        <Card date={"8 February"} category={"Back"} count={3} />
        <Card date={"8 February"} category={"Back"} count={3} />
      </ScrollView>
    </View>
  );
};

export default PreviousWorkouts;

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark2,
    borderRadius: wp(3),
    height: wp(30),
    width: wp(40),
    marginRight: wp(4),
    padding: wp(2),
    paddingHorizontal: wp(2.5),
  },
  dateText: {
    color: colors.dimWhite,
    fontFamily: globalStyles.fonts.font_400,
    fontSize: hp(2.1),
  },
  categoryText: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2.1),
  },
  countText: {
    color: colors.dimWhite,
    fontFamily: globalStyles.fonts.font_400,
    fontSize: hp(2.1),
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: hp(4),
  },
  top: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginBottom: hp(2),
  },
  topLeft: {
    flex: 5,
    // backgroundColor: "green",
  },
  topRight: {
    flex: 2.4,
    // backgroundColor: "white",
    alignItems: "flex-end",
    paddingEnd: wp(2),
  },
  heading: {
    color: colors.white,
    fontSize: hp(2.8),
    fontFamily: globalStyles.fonts.font_500,
  },
  allBtn: {
    color: colors.links,
    fontSize: hp(2.4),
    fontFamily: globalStyles.fonts.font_500,
  },
});
