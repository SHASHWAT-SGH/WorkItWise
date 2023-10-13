import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TutorialScreen from "../screens/TutorialScreen";
import Dashboard from "../screens/Dashboard";
import Diaries from "../screens/Diaries";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const TestComp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <Stack.Navigator
        initialRouteName="tutorialScreen"
        screenOptions={{
          animation: "fade",
          statusBarAnimation: "slide",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="tutorialScreen"
          component={TutorialScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="dashboard"
          component={Dashboard}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="diaries"
          component={Diaries}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default TestComp;

const styles = StyleSheet.create({});
