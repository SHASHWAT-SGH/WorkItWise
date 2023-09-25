import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Image } from "expo-image";

const TutorialScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>SKIP</Text>
      </View>
      <View style={styles.middle}>
        <Image
          style={styles.image}
          source={require("../assets/Images/illustrations/sammy-girl-works-out-on-a-gym-bike.png")}
        />
        <Text style={styles.middleHeader}>Log and track your workouts</Text>
        <Text style={styles.middleText}>
          Log every set and observe how you become better and stronger
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TutorialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7f7fff",
    padding: 7,
  },
  top: {
    flex: 0.05,
    alignItems: "flex-end",
    marginRight: 10,
  },
  topText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  middle: {
    flex: 0.75,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  image: {
    flex: 1,
    width: 250,
  },
  middleHeader: {
    flex: 0.4,
    fontSize: 32,
    textAlign: "center",
    paddingTop: 25,
    fontWeight: "800",
    color: "#FFFFFF",
    // backgroundColor: "red",
  },
  middleText: {
    flex: 0.3,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
  },
  bottom: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  continueBtn: {
    backgroundColor: "#FFFFFF",
    width: 220,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  continueText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#7f7fff",
    textAlign: "center",
  },
});
