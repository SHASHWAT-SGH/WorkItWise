import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawerNavigation from "../components/navigatoin/CustomDrawerNavigation";

const MainApp = () => {
  return (
    <NavigationContainer>
      <CustomDrawerNavigation />
    </NavigationContainer>
  );
};

export default MainApp;
