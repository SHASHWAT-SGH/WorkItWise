import { StyleSheet, Platform, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ExerciseList from "../screens/ExerciseList";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../global/colors";
import globalStyles from "../global/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CategoryScreen from "../screens/CategoryScreen";
import { FontAwesome } from "@expo/vector-icons";
import DiariesScreen from "../screens/DiariesScreen";

const Drawer = createDrawerNavigator();

const MainAppNavigation = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName="home screen"
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
        swipeEdgeWidth: 50,
        drawerContentContainerStyle: {
          flex: 1,
          justifyContent: "center",
          paddingLeft: 10,
        },
      }}
    >
      <Drawer.Screen
        name="home screen"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Feather
                name="home"
                size={24}
                color={colors.white}
                opacity={focused ? 1 : 0.6}
              />
            );
          },
          drawerLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.text,
                  focused ? styles.textActive : styles.textNotActive,
                ]}
              >
                Home
              </Text>
            );
          },
        }}
      />
      <Drawer.Screen
        name="category screen"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="weight-lifter"
                size={24}
                color={colors.white}
                opacity={focused ? 1 : 0.6}
              />
            );
          },
          drawerLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.text,
                  focused ? styles.textActive : styles.textNotActive,
                ]}
              >
                Exercises
              </Text>
            );
          },
        }}
      />

      <Drawer.Screen
        name="diary screen"
        component={DiariesScreen}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="book"
                size={24}
                color={colors.white}
                opacity={focused ? 1 : 0.6}
              />
            );
          },
          drawerLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.text,
                  focused ? styles.textActive : styles.textNotActive,
                ]}
              >
                My Diaries
              </Text>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainAppNavigation;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2.1),
  },
  textNotActive: {
    opacity: 0.6,
  },
  textActive: {
    opacity: 1,
  },
});

const Colors = {
  bg: "transparent",
  active: "#fff",
  inactive: "#eee",
  transparent: "transparent",
};
