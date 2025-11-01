import { StyleSheet, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MySafeAreaView = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + 6,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + 8,
        paddingRight: insets.right + 8,
      }}
    >
      {children}
    </View>
  );
};

export default MySafeAreaView;

const styles = StyleSheet.create({});
