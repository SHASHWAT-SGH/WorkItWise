import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import colors from "../../global/colors";

const Tutorial = ({
  illustratorUrl,
  titleText,
  subText,
  setDataIndex,
  skipCallback,
  arrayLength,
  dataIndex,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={skipCallback}>
          <Text style={styles.topText}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Image style={styles.image} source={illustratorUrl} />
        <Text style={styles.middleHeader}>{titleText}</Text>
        <Text style={styles.middleText}>{subText}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => {
            dataIndex < arrayLength - 1
              ? setDataIndex((prev) => prev + 1)
              : skipCallback();
          }}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    padding: 7,
  },
  top: {
    flex: 0.05,
    alignItems: "flex-end",
    marginRight: 10,
  },
  topText: {
    fontSize: 17,
    color: colors.white,
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
    color: colors.white,
    // backgroundColor: "red",
  },
  middleText: {
    flex: 0.3,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: colors.white,
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
    color: colors.color1,
    textAlign: "center",
  },
});
