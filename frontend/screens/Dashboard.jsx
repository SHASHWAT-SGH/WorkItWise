import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
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
// menu
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const openMenuFunc = (show, setShow, scale, moveToRight) => {
  Animated.timing(scale, {
    toValue: show ? 1 : 0.8,
    duration: 300,
    useNativeDriver: true,
  }).start();

  Animated.timing(moveToRight, {
    toValue: show ? 0 : 230,
    duration: 300,
    useNativeDriver: true,
  }).start();

  setShow(!show);
};

const Dashboard = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const moveToRight = useRef(new Animated.Value(0)).current;
  return (
    <>
      <SafeAreaView style={[styles.menuContainer, styles.bgColorBlue]}>
        {/* menu pannel at left */}

        <View style={styles.menuWrapper}>
          <View style={styles.menuItemContainer}>
            <Feather name="home" size={24} color="white" />
            <Text style={styles.menuText}>Home</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <MaterialIcons name="history" size={24} color="white" />
            <Text style={styles.menuText}>History</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color="white"
            />
            <Text style={styles.menuText}>Exercises</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Ionicons name="settings-outline" size={24} color="white" />
            <Text style={styles.menuText}>Settings</Text>
          </View>
        </View>

        {/* main screen : dashboard */}
        <>
          <Animated.View
            style={[
              styles.container,
              { transform: [{ scale: scale }, { translateX: moveToRight }] },
            ]}
          >
            <SafeAreaView>
              <Header
                openMenuFunc={() =>
                  openMenuFunc(show, setShow, scale, moveToRight)
                }
              />
              <ScrollView style={styles.scrollView}>
                <MyDiary navigation={navigation} name="My Diary" />
                <MyCalendar />
                <WorkoutAnalytics />
                <DailyWorkloadDistribution />
                <WeeklyWorkloadDistribution />
              </ScrollView>
              <Footer />
              <StatusBar style="light" />
            </SafeAreaView>
          </Animated.View>
        </>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    borderRadius: 12,
    // overflow: "hidden",
  },
  scrollView: {
    marginBottom: 72,
  },

  // styles for menu
  menuContainer: {
    flex: 1,
  },
  bgColorBlack: { backgroundColor: "black" },
  bgColorBlue: { backgroundColor: "#9090f5" },
  menuWrapper: {
    flex: 1,
    width: 250,
    justifyContent: "center",
    gap: 12,
    paddingLeft: 40,
  },
  menuItemContainer: {
    flexDirection: "row",

    gap: 8,
  },
  menuText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
