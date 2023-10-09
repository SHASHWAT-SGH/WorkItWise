import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// menu
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const openMenuFunc = (show, setShow, scale, moveToRight) => {
  Animated.timing(scale, {
    toValue: show ? 1 : 0.8,
    duration: 300,
    useNativeDriver: true,
  }).start();

  Animated.timing(moveToRight, {
    toValue: show ? 0 : 230,
    duration: 300,
    useNativeDriver: true,
  }).start();

  setShow(!show);
};

const SideMenuWrapper = ({ children }) => {
  const [show, setShow] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const moveToRight = useRef(new Animated.Value(0)).current;

  const callOpenMenuFunction = () => {
    openMenuFunc(show, setShow, scale, moveToRight);
  };
  return (
    <>
      <SafeAreaView style={[styles.menuContainer, styles.bgColorBlue]}>
        {/* menu pannel at left */}

        <View style={styles.menuWrapper}>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Feather name="home" size={24} color="white" />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <MaterialIcons name="history" size={24} color="white" />
            <Text style={styles.menuText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color="white"
            />
            <Text style={styles.menuText}>Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Ionicons name="settings-outline" size={24} color="white" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* main screen : dashboard */}
        <>
          <Animated.View
            style={[
              styles.container,
              show ? { borderRadius: 12 } : { borderRadius: 0 },
              { transform: [{ scale: scale }, { translateX: moveToRight }] },
            ]}
          >
            {React.Children.map(children, (child) => {
              // Clone the child elements and pass the 'first' prop
              return React.cloneElement(child, { callOpenMenuFunction });
            })}
          </Animated.View>
        </>
      </SafeAreaView>
    </>
  );
};

export default SideMenuWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // overflow: "hidden",
  },
  scrollView: {
    marginBottom: 70,
  },

  // styles for menu
  menuContainer: {
    flex: 1,
  },
  bgColorBlack: { backgroundColor: "black" },
  bgColorBlue: { backgroundColor: "#9090f5" },
  menuWrapper: {
    flex: 1,
    width: 250,
    justifyContent: "center",
    gap: 12,
    paddingLeft: 40,
  },
  menuItemContainer: {
    flexDirection: "row",
    gap: 8,
  },
  menuText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
