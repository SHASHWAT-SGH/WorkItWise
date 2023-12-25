import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/dashboard/Header";
import { StatusBar } from "expo-status-bar";
import MyDiary from "../components/dashboard/MyDiary";
import Footer from "../components/dashboard/Footer";
import WorkoutAnalytics from "../components/dashboard/WorkoutAnalytics";
import WeeklyWorkloadDistribution from "../components/dashboard/WeeklyWorkloadDistribution";
import DailyWorkloadDistribution from "../components/dashboard/DailyWorkloadDistribution";
import MyCalendar from "../components/dashboard/MyCalendar";

import colors from "../global/colors";

// axios
import { axiosInstance } from "../utils/axiosInstance";

const Dashboard = ({ navigation }) => {
  const getHidden = async () => {
    await axiosInstance
      .get("/api/hidden")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getHidden();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Header
        title="Home"
        openDrawer={navigation.openDrawer}
        showProfileImage={true}
      />
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          <MyDiary name="My Diary" navigation={navigation} />
          <MyCalendar />
          <WorkoutAnalytics />
          <DailyWorkloadDistribution />
          <WeeklyWorkloadDistribution />
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
      <StatusBar style="light" />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.black,
    flex: 1,
  },
  scrollView: {
    marginBottom: 69,
  },
});
