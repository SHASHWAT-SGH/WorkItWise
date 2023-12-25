import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MySafeAreaView = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 6,
        paddingHorizontal: 12,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default MySafeAreaView;

const styles = StyleSheet.create({});
