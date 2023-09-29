import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import { StatusBar } from "expo-status-bar";
import MyDiary from "../components/dashboard/MyDiary";
import Footer from "../components/dashboard/Footer";
import WorkoutAnalytics from "../components/dashboard/WorkoutAnalytics";
import WorkoutsPerWeek from "../components/dashboard/WorkoutsPerWeek";
import WeeklyWorkloadDistribution from "../components/dashboard/WeeklyWorkloadDistribution";
import DailyWorkloadDistribution from "../components/dashboard/DailyWorkloadDistribution";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <MyDiary />
        <WorkoutAnalytics />
        {/* <WorkoutsPerWeek /> */}
        <DailyWorkloadDistribution />
        <WeeklyWorkloadDistribution />
      </ScrollView>
      <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  scrollView: {
    marginBottom: 72,
  },
});
