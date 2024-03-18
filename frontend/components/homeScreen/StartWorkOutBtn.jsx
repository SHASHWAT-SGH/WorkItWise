import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../global/colors";
import globalStyles from "../../global/styles";
import { useNavigation } from "@react-navigation/native";

const StartWorkOutBtn = () => {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <>
      <View style={[styles.container, { width: width }]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("startWorkout");
          }}
        >
          <Text style={styles.text}>Start Workout</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.3)"]}
          style={styles.shadowOverlay}
        />
      </View>
    </>
  );
};

export default StartWorkOutBtn;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: colors.dark2,
    position: "absolute",
    bottom: 0,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    padding: 10,
    paddingBottom: 6,
    backgroundColor: colors.dark1,
  },
  btn: {
    backgroundColor: colors.dark2,
    flex: 1,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
  },
  shadowOverlay: {
    position: "absolute",
    top: -19,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 17, // Adjust the height of the shadow as needed
  },
});
