import React, { useEffect, useState } from "react";
import Tutorial from "../components/tutorials/Tutorial";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./Dashboard";

const data = [
  {
    illustratorUrl: require("../assets/Images/illustrations/sammy-girl-works-out-on-a-gym-bike.png"),
    titleText: "Log and track your workouts",
    subText: "Log every set and observe how you become better and stronger",
  },
  {
    illustratorUrl: require("../assets/Images/illustrations/marginalia-getting-stronger-in-the-gym.png"),
    titleText: "More than 50 exercies in catalogue",
    subText:
      "Push-ups, pull-ups, crunches - you name it, we have it. In case we don't - create your own",
  },
  {
    illustratorUrl: require("../assets/Images/illustrations/pale-in-the-gym.png"),
    titleText: "Suits personal trainers",
    subText:
      "No more notebooks and pencils. Create diaries for your trainees and log their performance",
  },
];

const TutorialScreen = ({ navigation }) => {
  const [dataIndex, setDataIndex] = useState(0);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    skip ? navigation.navigate("dashboard") : null;
  }, [skip]);

  return !skip ? (
    dataIndex < data.length ? (
      <Tutorial
        illustratorUrl={data[dataIndex].illustratorUrl}
        titleText={data[dataIndex].titleText}
        subText={data[dataIndex].subText}
        setDataIndex={setDataIndex}
        setSkip={setSkip}
      />
    ) : (
      setSkip(true)
    )
  ) : null;
};

export default TutorialScreen;
