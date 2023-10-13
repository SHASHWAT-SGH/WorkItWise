import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SideMenuWrapper from "../components/wrappers/SideMenuWrapper";
import TestComp from "../tests/TestComp";

const MainAppWindow = () => {
  return (
    <NavigationContainer>
      <SideMenuWrapper>
        <TestComp />
      </SideMenuWrapper>
    </NavigationContainer>
  );
};

export default MainAppWindow;

const styles = StyleSheet.create({});
