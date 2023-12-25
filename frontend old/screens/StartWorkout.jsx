import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import MyModal from "../components/start-workout/MyModal";
import LottieView from "lottie-react-native";
import Header from "../components/dashboard/Header";

import colors from "../global/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StartWorkout = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Header title={"Today"} backIcon={true} navigation={navigation} />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={colors.color3}
          style={styles.addExercise}
          onPress={() => {
            navigation.navigate("ModalViewExercises");
          }}
        >
          <MaterialIcons name="add" size={35} color={colors.white} />
        </TouchableHighlight>
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
      </View>
      {/* <MyModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      >
        <StartWorkoutAndExerciseList />
      </MyModal> */}
    </>
  );
};

export default StartWorkout;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black, flex: 1, position: "relative" },
  addExercise: {
    backgroundColor: colors.color1,
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 10,
    borderRadius: 8,
  },
});
