import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../../screens/Dashboard";
import Settings from "../../screens/Settings";
import Exercises from "../../screens/Exercises";
import HistoryScreen from "../../screens/HistoryScreen";
import colors from "../../global/colors";

// icons
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../../screens/ExerciseList";
import ExerciseCategoryAndList from "../others/ExerciseCategoryAndList";

const Drawer = createDrawerNavigator();

const CustomDrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        drawerType="slide"
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.transparent,
          drawerInactiveBackgroundColor: Colors.transparent,
          drawerActiveTintColor: Colors.active,
          drawerInactiveTintColor: Colors.inactive,
          drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,
          overlayColor: Colors.transparent,
          drawerStyle: {
            backgroundColor: Colors.bg,
            width: "60%",
          },
          sceneContainerStyle: {
            backgroundColor: Colors.bg,
          },
          swipeEdgeWidth: 100,
          drawerContentContainerStyle: {
            flex: 1,
            justifyContent: "center",
            paddingLeft: 10,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Dashboard}
          options={{
            drawerIcon: ({ focused }) => {
              return (
                <Feather
                  name="home"
                  size={24}
                  color={"white"}
                  opacity={focused ? 1 : 0.6}
                />
              );
            },
            drawerLabel: ({ focused }) => {
              return focused ? (
                <Text style={[styles.text]}>Home</Text>
              ) : (
                <Text style={[styles.text, styles.textNotActive]}>Home</Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="History"
          component={HistoryScreen}
          options={{
            drawerIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="history"
                  size={24}
                  color={"white"}
                  opacity={focused ? 1 : 0.6}
                />
              );
            },
            drawerLabel: ({ focused }) => {
              return focused ? (
                <Text style={[styles.text]}>History</Text>
              ) : (
                <Text style={[styles.text, styles.textNotActive]}>History</Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="ExerciseCategoryAndList"
          component={ExerciseCategoryAndList}
          options={{
            drawerIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={24}
                  color="white"
                  opacity={focused ? 1 : 0.6}
                />
              );
            },
            drawerLabel: ({ focused }) => {
              return focused ? (
                <Text style={[styles.text]}>Exercises</Text>
              ) : (
                <Text style={[styles.text, styles.textNotActive]}>
                  Exercises
                </Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ focused }) => {
              return (
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color="white"
                  opacity={focused ? 1 : 0.6}
                />
              );
            },
            drawerLabel: ({ focused }) => {
              return focused ? (
                <Text style={[styles.text]}>Settings</Text>
              ) : (
                <Text style={[styles.text, styles.textNotActive]}>
                  Settings
                </Text>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default CustomDrawerNavigation;

const Colors = {
  bg: colors.color1,
  active: "#fff",
  inactive: "#eee",
  transparent: "transparent",
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
  textNotActive: {
    opacity: 0.6,
  },
});
