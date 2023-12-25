import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartWorkout from "../../screens/StartWorkout";
import ModalViewExercises from "../exercises/ModalViewExercises";
import colors from "../../global/colors";

const Stack = createNativeStackNavigator();

const StartWorkoutAndExerciseList = () => {
  return (
    <Stack.Navigator
      initialRouteName="ModalStartWorkout"
      screenOptions={{
        presentation: "card",
        headerShown: false,
        animationTypeForReplace: "pop",
        animation: "slide_from_bottom",
        contentStyle: { backgroundColor: colors.color1 },
      }}
    >
      <Stack.Screen name="ModalStartWorkout" component={StartWorkout} />
      <Stack.Screen name="ModalViewExercises" component={ModalViewExercises} />
    </Stack.Navigator>
  );
};

export default StartWorkoutAndExerciseList;

const styles = StyleSheet.create({});
