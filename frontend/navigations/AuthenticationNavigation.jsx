import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../global/colors";
import CategoryScreen from "../screens/CategoryScreen";
import ExerciseInformation from "../screens/ExerciseInformation";
import StartWorkoutScreen from "../screens/StartWorkoutScreen";
import ExerciseList from "../screens/ExerciseList";
import MainAppNavigation from "./MainAppNavigation";
import { AuthContext } from "../contexts/AuthContext";
import StackCategoryScreen from "../screens/StackCategoryScreen";

const Stack = createNativeStackNavigator();

const AuthenticationNavigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
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
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="signUpScreen" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="homeScreen" component={MainAppNavigation} />
          <Stack.Screen name="exerciseList" component={ExerciseList} />
          <Stack.Screen
            name="exerciseInformation"
            component={ExerciseInformation}
          />
          <Stack.Screen name="startWorkout" component={StartWorkoutScreen} />
          <Stack.Screen
            name="StackCategoryScreen"
            component={StackCategoryScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthenticationNavigation;

const styles = StyleSheet.create({});
