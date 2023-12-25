import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Exercises from "../../screens/Exercises";
import ExerciseList from "../../screens/ExerciseList";
import ExerciseInformation from "../../screens/ExerciseInformation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../../global/colors";
import DrawerScreenWrapper from "../wrappers/DrawerScreenWrapper";

const Stack = createNativeStackNavigator();

const ExerciseCategoryAndList = () => {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "red" },
          headerShown: false,
          animationTypeForReplace: "push",
          animation: "slide_from_right",
          contentStyle: { backgroundColor: colors.color1 },
        }}
      >
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="ExerciseList" component={ExerciseList} />
        <Stack.Screen
          name="ExerciseInformation"
          component={ExerciseInformation}
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
};

export default ExerciseCategoryAndList;

const styles = StyleSheet.create({});
