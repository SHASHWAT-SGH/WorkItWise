import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import colors from "../global/colors";
import MySafeAreaView from "../components/MySafeAreaView";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StartWorkoutScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <MySafeAreaView style={styles.container}>
        <Header screenName={"Today"} />
        <TouchableOpacity
          style={styles.addExercise}
          onPress={() => {
            navigation.navigate("StackCategoryScreen");
          }}
        >
          <MaterialIcons name="add" size={35} color={colors.white} />
        </TouchableOpacity>
        <View
          style={{
            zIndex: -1,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            width: width,
            height: height - 30,
          }}
        >
          <LottieView
            autoPlay
            style={{
              width: 250,
              height: 250,
            }}
            source={require("../assets/lottie/gym.json")}
          />
          <Text
            style={{
              color: colors.dimWhite,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Press + to add exercises and start logging your sets
          </Text>
        </View>
      </MySafeAreaView>
    </>
  );
};

export default StartWorkoutScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black, flex: 1, position: "relative" },
  addExercise: {
    backgroundColor: colors.dark2,
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 10,
    borderRadius: 8,
  },
});
