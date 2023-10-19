import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../global/colors";
import Header from "../components/dashboard/Header";
import { Image } from "expo-image";
import { API_URL } from "../utils/axiosInstance";
import { ScrollView } from "react-native-gesture-handler";

const ExerciseInformation = ({ navigation, route }) => {
  const { exerciseInfo } = route.params;
  const {
    EXERCISE_NAME,
    ANIMATED_IMAGE_URL,
    BODY_PART,
    EQUIPMENT,
    INSTRUCTIONS,
    SECONDARY_MUSCLES,
    TARGET_MUSCLE,
  } = exerciseInfo;

  return (
    <SafeAreaView style={styles.container}>
      <Header backIcon={true} title={EXERCISE_NAME} navigation={navigation} />
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: `${API_URL}/api/get/gif?location=${ANIMATED_IMAGE_URL}`,
          }}
        />
      </View>
      <ScrollView style={styles.infoWrapper}>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Muscles Involved</Text>
          <View style={styles.musclesWrapper}>
            <Text style={[styles.muscleName, styles.muscleNamePrimary]}>
              {exerciseInfo.TARGET_MUSCLE}
            </Text>
            {Object.keys(SECONDARY_MUSCLES).map((key) => {
              return (
                <Text
                  style={[styles.muscleName, styles.muscleNameSecondary]}
                  key={key}
                >
                  {SECONDARY_MUSCLES[key]}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Equipment</Text>
          <View style={styles.textWrapperPadded}>
            <Text style={styles.text}>
              {`\u2022`} {EQUIPMENT}
            </Text>
          </View>
        </View>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Instructions</Text>
          <View style={styles.textWrapperPadded}>
            {Object.keys(INSTRUCTIONS).map((key) => {
              return (
                <Text style={styles.text} key={key}>
                  {key}. {INSTRUCTIONS[key]}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseInformation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imgWrapper: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "red",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 6,
  },
  infoWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  viewWrapper: {
    marginTop: 10,
    borderColor: colors.dark2,
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  musclesWrapper: {
    marginTop: 12,
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  muscleName: {
    color: colors.white,
    fontSize: 16,
    textTransform: "capitalize",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 5,
  },
  muscleNamePrimary: {
    backgroundColor: colors.color3,
  },
  muscleNameSecondary: {
    backgroundColor: colors.dark2,
  },
  textWrapperPadded: {
    paddingLeft: 20,
    marginTop: 5,
  },
  text: {
    color: colors.dimWhite,
    fontSize: 15,
    textTransform: "capitalize",
    lineHeight: 20,
  },
});
