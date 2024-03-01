import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import Header from "../components/Header";
import colors from "../global/colors";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import globalStyles from "../global/styles";

const Card = () => {
  return (
    <TouchableOpacity style={cardStyle.wrapper}>
      <View style={cardStyle.left}>
        <Image
          source={require("../assets/extras/17barbellwidebenchpress.gif")}
          style={cardStyle.image}
        />
        {/* <Text>heheh</Text> */}
      </View>
      <View style={cardStyle.right}>
        <Text style={cardStyle.text} numberOfLines={2}>
          Barbell wide benchpress
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ExerciseList = () => {
  return (
    <MySafeAreaView>
      <Header screenName={"Chest"} showSearchBtn={true} showAddBtn={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default ExerciseList;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: wp(4),
    marginTop: wp(2),
    marginBottom: wp(6),
  },
});

const cardStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.dark2,
    flexDirection: "row",
    borderRadius: wp(2),
    padding: wp(1),
  },
  left: {
    flex: 1,
  },
  image: {
    width: wp(18),
    height: wp(18),
    flex: 1,
    borderRadius: wp(2),
  },
  right: {
    flex: 4,
    marginLeft: wp(8),
    justifyContent: "center",
  },
  text: {
    fontSize: hp(2.2),
    fontFamily: globalStyles.fonts.font_400,
    color: colors.white,
  },
});
