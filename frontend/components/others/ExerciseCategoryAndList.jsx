import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Exercises from "../../screens/Exercises";
import ExerciseList from "../../screens/ExerciseList";
import ExerciseInformation from "../../screens/ExerciseInformation";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../../global/colors";

const Stack = createStackNavigator();

const ExerciseCategoryAndList = () => {
  return (
    <Stack.Navigator
      initialRouteName={Exercises}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.color1,
        },
        // animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="ExerciseList" component={ExerciseList} />
      <Stack.Screen
        name="ExerciseInformation"
        component={ExerciseInformation}
      />
    </Stack.Navigator>
  );
};

export default ExerciseCategoryAndList;

const styles = StyleSheet.create({});
