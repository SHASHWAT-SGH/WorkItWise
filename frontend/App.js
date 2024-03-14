import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import React from "react";
import MyApp from "./components/MyApp";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <MyApp />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
