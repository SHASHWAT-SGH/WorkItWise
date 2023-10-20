import { StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../global/colors";

const Loader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/lottie/loading.json")}
      />
    </SafeAreaView>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
