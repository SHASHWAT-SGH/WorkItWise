import { StyleSheet, Platform, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

const DrawerScreenWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const { width } = useWindowDimensions();
  // console.log(progress.value);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp"),
      },
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, -10], "clamp")}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === "android" ? width - 190 : -180],
          "clamp"
        ),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 20], "clamp"),
    overflow: "hidden",
  }));

  return (
    <LinearGradient
      colors={["#0e0b31", "#0c0a15"]}
      style={{
        flex: 1,
      }}
      start={{ x: 0, y: 0.03 }}
      end={{ x: 0.32, y: 0.32 }}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    </LinearGradient>
  );
};

export default DrawerScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
