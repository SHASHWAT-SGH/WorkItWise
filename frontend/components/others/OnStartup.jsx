import React, { useEffect, useState } from "react";
import TutorialScreen from "../../screens/TutorialScreen";
import { useCallback } from "react";

// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthAndMain from "./AuthAndMain";
import Loader from "../Loader";

const OnStartup = () => {
  const [loading, setLoading] = useState(true);
  const [usingFirstTime, setUsingFirstTime] = useState(true);
  const checkAppFirstTime = async () => {
    try {
      const data = await AsyncStorage.getItem("usingFirstTime");
      if (data != null) {
        setUsingFirstTime(false);
      } else {
        await AsyncStorage.setItem("usingFirstTime", "false");
      }
    } catch (e) {
      // log error
      console.error("async storage error : " + e);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAppFirstTime();
  }, []);

  const [skip, setSkip] = useState(false);

  const skipCallback = useCallback(() => {
    setSkip(true);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {usingFirstTime && !skip ? (
        <TutorialScreen skipCallback={skipCallback} />
      ) : (
        <AuthAndMain />
      )}
    </>
  );
};

export default OnStartup;
