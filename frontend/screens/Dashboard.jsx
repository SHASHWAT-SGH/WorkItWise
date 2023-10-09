import { Animated, ScrollView, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import { StatusBar } from "expo-status-bar";
import MyDiary from "../components/dashboard/MyDiary";
import Footer from "../components/dashboard/Footer";
import WorkoutAnalytics from "../components/dashboard/WorkoutAnalytics";
import WeeklyWorkloadDistribution from "../components/dashboard/WeeklyWorkloadDistribution";
import DailyWorkloadDistribution from "../components/dashboard/DailyWorkloadDistribution";
import MyCalendar from "../components/dashboard/MyCalendar";
import SideMenuWrapper from "../components/wrappers/SideMenuWrapper";

const UnwrappedDashboard = ({ navigation, callOpenMenuFunction }) => {
  return (
    <SafeAreaView>
      <Header title="Home" callOpenMenuFunction={callOpenMenuFunction} />
      <View style={{ height: 689 }}>
        <ScrollView style={styles.scrollView}>
          <MyDiary navigation={navigation} name="My Diary" />
          <MyCalendar />
          <WorkoutAnalytics />
          <DailyWorkloadDistribution />
          <WeeklyWorkloadDistribution />
        </ScrollView>
      </View>
      <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const Dashboard = ({ navigation }) => {
  return (
    <SideMenuWrapper>
      <UnwrappedDashboard navigation={navigation} />
    </SideMenuWrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 70,
  },
});
