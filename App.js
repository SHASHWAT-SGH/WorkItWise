import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TutorialScreen from "./screens/TutorialScreen";

export default function App() {
  return (
    <>
      <TutorialScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
