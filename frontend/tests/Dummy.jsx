import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SideMenuWrapper from "./SideMenuWrapper";

const TestComp = ({ callOpenMenuFunction }) => {
  return (
    <View style={{ marginTop: 100 }}>
      <TouchableOpacity onPress={callOpenMenuFunction}>
        <Text style={{ color: "white" }}>Dummy</Text>
      </TouchableOpacity>
    </View>
  );
};

const Dummy = () => {
  return (
    <SideMenuWrapper>
      <TestComp />
    </SideMenuWrapper>
  );
};

export default Dummy;

const styles = StyleSheet.create({});
