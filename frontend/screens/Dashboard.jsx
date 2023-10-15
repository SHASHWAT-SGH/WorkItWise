import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import { StatusBar } from "expo-status-bar";
import MyDiary from "../components/dashboard/MyDiary";
import Footer from "../components/dashboard/Footer";
import WorkoutAnalytics from "../components/dashboard/WorkoutAnalytics";
import WeeklyWorkloadDistribution from "../components/dashboard/WeeklyWorkloadDistribution";
import DailyWorkloadDistribution from "../components/dashboard/DailyWorkloadDistribution";
import MyCalendar from "../components/dashboard/MyCalendar";
import DrawerScreenWrapper from "../components/wrappers/DrawerScreenWrapper";

// axios
import { axiosInstance } from "../utils/axiosInstance";

const Dashboard = ({ navigation }) => {
  const getHidden = async () => {
    await axiosInstance
      .get("/hidden")
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
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.wrapper}>
        <Header title="Home" openDrawer={navigation.openDrawer} />
        <View style={{ height: 689 }}>
          <ScrollView style={styles.scrollView}>
            <MyDiary name="My Diary" />
            <MyCalendar />
            <WorkoutAnalytics />
            <DailyWorkloadDistribution />
            <WeeklyWorkloadDistribution />
          </ScrollView>
        </View>
        <Footer />
        <StatusBar style="light" />
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    flex: 1,
  },
  scrollView: {
    marginBottom: 70,
  },
});
