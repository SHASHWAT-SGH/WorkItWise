import React, { useEffect, useState } from "react";
import Tutorial from "../components/tutorials/Tutorial";

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

const TutorialScreen = ({ skipCallback }) => {
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <Tutorial
      illustratorUrl={data[dataIndex].illustratorUrl}
      titleText={data[dataIndex].titleText}
      subText={data[dataIndex].subText}
      setDataIndex={setDataIndex}
      skipCallback={skipCallback}
      arrayLength={data.length}
      dataIndex={dataIndex}
    />
  );
};

export default TutorialScreen;
