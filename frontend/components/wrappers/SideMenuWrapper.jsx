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
  const [activeScreen, setActiveScreen] = useState("Home");
  const [show, setShow] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const moveToRight = useRef(new Animated.Value(0)).current;

  const callOpenMenuFunction = (screenName) => {
    openMenuFunc(show, setShow, scale, moveToRight);
    if (["Home", "History", "Exercises", "Settings"].includes(screenName)) {
      setActiveScreen(screenName);
    }
  };
  return (
    <>
      <SafeAreaView style={[styles.menuContainer, styles.bgColorBlue]}>
        {/* menu pannel at left */}

        <View style={styles.menuWrapper}>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => callOpenMenuFunction("Home")}
          >
            <Feather
              name="home"
              size={24}
              color={"white"}
              opacity={activeScreen == "Home" ? 1 : 0.7}
            />
            <Text
              style={[
                styles.menuText,
                activeScreen == "Home" ? styles.activeMenu : null,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => callOpenMenuFunction("History")}
          >
            <MaterialIcons
              name="history"
              size={24}
              color="white"
              opacity={activeScreen == "History" ? 1 : 0.7}
            />
            <Text
              style={[
                styles.menuText,
                activeScreen == "History" ? styles.activeMenu : null,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => callOpenMenuFunction("Exercises")}
          >
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color="white"
              opacity={activeScreen == "Exercises" ? 1 : 0.7}
            />
            <Text
              style={[
                styles.menuText,
                activeScreen == "Exercises" ? styles.activeMenu : null,
              ]}
            >
              Exercises
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => callOpenMenuFunction("Settings")}
          >
            <Ionicons
              name="settings-outline"
              size={24}
              color="white"
              opacity={activeScreen == "Settings" ? 1 : 0.7}
            />
            <Text
              style={[
                styles.menuText,
                activeScreen == "Settings" ? styles.activeMenu : null,
              ]}
            >
              Settings
            </Text>
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
              // Clone the child elements and pass the 'callOpenMenuFunction' prop
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
    overflow: "hidden",
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
    opacity: 0.7,
  },
  activeMenu: {
    fontWeight: "bold",
    opacity: 1,
  },
});
