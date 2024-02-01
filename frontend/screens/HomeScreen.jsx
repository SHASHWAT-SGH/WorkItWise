import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import colors from "../global/colors";
import Greeting from "../components/homeScreen/Greeting";
import StartWorkOutBtn from "../components/homeScreen/StartWorkOutBtn";
import Header from "../components/Header";
import WorkLoadDistribution from "../components/homeScreen/WorkLoadDistribution";

const HomeScreen = () => {
  return (
    <MySafeAreaView>
      <Header showMenu={true} screenName={"Home"} showUserIcon={true} />
      <ScrollView>
        <Greeting />
        <WorkLoadDistribution />
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
