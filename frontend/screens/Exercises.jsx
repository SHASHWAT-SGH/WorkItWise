import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import Card from "../components/exercises/Card";
import DrawerScreenWrapper from "../components/wrappers/DrawerScreenWrapper";

const Exercises = () => {
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.container}>
        <Header title="Exercises" />
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardContainer}>
            <Card imgname="back" />
            <Card imgname="chest" />
            <Card imgname="cardio" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  scrollView: {
    // backgroundColor: "red",
    padding: 20,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "green",
    flexWrap: "wrap",
    gap: 21,
    justifyContent: "space-between",
  },
});
