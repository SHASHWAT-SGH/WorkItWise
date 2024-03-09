import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Tutorial from "../components/tutorials/Tutorial";

const data = [
  {
    illustratorUrl: require("../assets/images/illustration1.png"),
    titleText: "Log and track your workouts",
    subText: "Log every set and observe how you become better and stronger",
  },
  {
    illustratorUrl: require("../assets/images/illustration3.png"),
    titleText: "More than 100 exercies in catalogue",
    subText:
      "Push-ups, pull-ups, crunches - you name it, we have it. In case we don't - create your own",
  },
  {
    illustratorUrl: require("../assets/images/illustration2.png"),
    titleText: "Suits personal trainers",
    subText:
      "No more notebooks and pencils. Create diaries for your trainees and log their performance",
  },
];

const TutorialScreen = () => {
  const [endReached, setEndReached] = useState(false);
  return (
    <FlatList
      data={data}
      pagingEnabled
      horizontal
      renderItem={({ item, index }) => (
        <Tutorial
          illustratorUrl={item.illustratorUrl}
          titleText={item.titleText}
          subText={item.subText}
          key={index}
        />
      )}
      onEndReached={() => {
        setEndReached(true);
      }}
    />
  );
};

export default TutorialScreen;

const styles = StyleSheet.create({});
