import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TutorialScreen from "./screens/TutorialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import Diaries from "./screens/Diaries";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tutorialScreen">
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
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
