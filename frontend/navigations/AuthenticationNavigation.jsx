import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../global/colors";
import CategoryScreen from "../screens/CategoryScreen";
import ExerciseInformation from "../screens/ExerciseInformation";
import ExerciseList from "../screens/ExerciseList";

const Stack = createNativeStackNavigator();

const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      {/* <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="signUpScreen" component={SignUpScreen} /> */}
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="test" component={CategoryScreen} /> */}
      {/* <Stack.Screen name="test" component={ExerciseList} /> */}
      {/* <Stack.Screen name="test" component={ExerciseInformation} /> */}
    </Stack.Navigator>
  );
};

export default AuthenticationNavigation;

const styles = StyleSheet.create({});
