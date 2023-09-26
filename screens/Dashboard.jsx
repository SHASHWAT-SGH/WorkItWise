import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import { StatusBar } from "expo-status-bar";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
