import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Exercises from "../../screens/Exercises";
import ExerciseList from "../../screens/ExerciseList";
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
      }}
    >
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="ExerciseList" component={ExerciseList} />
    </Stack.Navigator>
  );
};

export default ExerciseCategoryAndList;

const styles = StyleSheet.create({});
