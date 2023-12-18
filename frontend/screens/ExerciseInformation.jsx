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
    exercise_name,
    equipment,
    animated_image_url,
    target_muscle,
    secondary_muscles,
    instructions,
  } = exerciseInfo;

  return (
    <SafeAreaView style={styles.container}>
      <Header backIcon={true} title={exercise_name} navigation={navigation} />
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: `${API_URL}/media/gif/exercise?exercise_name=${animated_image_url}`,
          }}
        />
      </View>
      <ScrollView style={styles.infoWrapper}>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Muscles Involved</Text>
          <View style={styles.musclesWrapper}>
            <Text style={[styles.muscleName, styles.muscleNamePrimary]}>
              {target_muscle}
            </Text>
            {Object.keys(secondary_muscles).map((key) => {
              return (
                <Text
                  style={[styles.muscleName, styles.muscleNameSecondary]}
                  key={key}
                >
                  {secondary_muscles[key]}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Equipment</Text>
          <View style={styles.textWrapperPadded}>
            <Text style={styles.text}>
              {`\u2022`} {equipment}
            </Text>
          </View>
        </View>
        <View style={styles.viewWrapper}>
          <Text style={styles.heading}>Instructions</Text>
          <View style={styles.textWrapperPadded}>
            {Object.keys(instructions).map((key) => {
              return (
                <Text style={styles.text} key={key}>
                  {instructions[key]}
                  {"\n"}
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
    paddingLeft: 2,
    marginTop: 5,
  },
  text: {
    color: colors.dimWhite,
    fontSize: 15,
    textTransform: "capitalize",
    lineHeight: 20,
  },
});
