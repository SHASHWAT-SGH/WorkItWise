import React, { useEffect, useState } from "react";
import TutorialScreen from "../../screens/TutorialScreen";
import { useCallback } from "react";

// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthAndMain from "./AuthAndMain";

const OnStartup = () => {
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
      console.error("aasync storage error : " + e);
    }
  };

  useEffect(() => {
    checkAppFirstTime();
  }, []);

  const [skip, setSkip] = useState(false);

  const skipCallback = useCallback(() => {
    setSkip(true);
  }, []);

  return (
    <>
      {/* <AuthProvider value={{ jwtToken, isAuthenticated, setIsAuthenticated }}> */}
      {usingFirstTime && !skip ? (
        <TutorialScreen skipCallback={skipCallback} />
      ) : (
        <AuthAndMain />
      )}
      {/* </AuthProvider> */}
    </>
  );
};

export default OnStartup;
