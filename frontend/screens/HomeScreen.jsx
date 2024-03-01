import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import colors from "../global/colors";
import Greeting from "../components/homeScreen/Greeting";
import StartWorkOutBtn from "../components/homeScreen/StartWorkOutBtn";
import Header from "../components/Header";
import WorkLoadDistribution from "../components/homeScreen/WorkLoadDistribution";
import WeeklyWorkGraph from "../components/homeScreen/WeeklyWorkGraph";
import PreviousWorkouts from "../components/homeScreen/PreviousWorkouts";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
  return (
    <MySafeAreaView>
      <Header showMenu={true} screenName={"Home"} showUserIcon={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: hp(12), flex: 1 }}>
          <Greeting />
          <WeeklyWorkGraph />
          <PreviousWorkouts />
          <WorkLoadDistribution />
        </View>
      </ScrollView>
      <StartWorkOutBtn />
    </MySafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
