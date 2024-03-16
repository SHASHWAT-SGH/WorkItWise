import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import React from "react";
import MyApp from "./components/MyApp";
import { AuthProvider } from "./contexts/AuthContext";
import { ExerciseInfoProvider } from "./contexts/ExerciseInfoContext";

const App = () => {
  return (
    <AuthProvider>
      <ExerciseInfoProvider>
        <MyApp />
      </ExerciseInfoProvider>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
