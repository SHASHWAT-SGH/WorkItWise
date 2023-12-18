import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerScreenWrapper from "../wrappers/DrawerScreenWrapper";
import Dashboard from "../../screens/Dashboard";
import Diaries from "../../screens/Diaries";
import StartWorkoutAndExerciseList from "./StartWorkoutAndExerciseList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const DashboardAndOthers = () => {
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.wrapper}>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            cardStyle: { backgroundColor: "red" },
            headerShown: false,
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            contentStyle: { backgroundColor: colors.color1 },
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Diaries" component={Diaries} />
          <Stack.Screen
            name="StartWorkout"
            component={StartWorkoutAndExerciseList}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default DashboardAndOthers;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    flex: 1,
  },
});
