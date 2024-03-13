import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import Header from "../components/Header";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../global/colors";
import globalStyles from "../global/styles";

const ExerciseInformation = () => {
  return (
    <MySafeAreaView>
      <Header screenName={"Exercise"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/extras/17barbellwidebenchpress.gif")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.wrapper}>
              <View style={styles.headingContainer}>
                <Text style={styles.header}>Muscles involved</Text>
              </View>
              <View style={styles.muscleWrapper}>
                <View
                  style={[styles.block, { backgroundColor: colors.yellow1 }]}
                >
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
                <View style={styles.block}>
                  <Text style={styles.muscleName}>Letis</Text>
                </View>
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.headingContainer}>
                <Text style={styles.header}>Steps</Text>
              </View>
              <View style={styles.exerciseInfoStepsWrapper}>
                <Text style={styles.step}>1. Go and pick up dubmel.</Text>
                <Text style={styles.step}>2. Hold your shoulder up.</Text>
                <Text style={styles.step}>3. Do bench press.</Text>
              </View>
            </View>
            <View style={styles.addWorkout}>
              <TouchableOpacity>
                <Text style={styles.btn}>Add to workout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default ExerciseInformation;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: wp(3),
    paddingBottom: wp(4),
    borderBottomWidth: 0.2,
    borderBottomColor: colors.border,
  },
  image: {
    flex: 1,
    borderRadius: wp(3),
    width: 300,
  },
  infoContainer: {
    flex: 1,
  },
  wrapper: {
    paddingVertical: wp(4),
    borderBottomWidth: 0.2,
    paddingBottom: wp(8),
    borderBottomColor: colors.border,
  },
  headingContainer: {},
  header: {
    fontSize: hp(3),
    fontFamily: globalStyles.fonts.font_500,
    color: colors.white,
  },
  muscleWrapper: {
    flexDirection: "row",
    marginTop: wp(3),
    gap: wp(3),
    flexWrap: "wrap",
  },
  block: {
    backgroundColor: colors.links,
    padding: wp(2),
    borderRadius: wp(2),
  },
  muscleName: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2.2),
  },
  exerciseInfoStepsWrapper: {},
  step: {
    color: colors.white,
    fontSize: hp(2.1),
    fontFamily: globalStyles.fonts.font_400,
    marginTop: hp(0.3),
  },
  addWorkout: {
    marginTop: wp(6),
    alignItems: "center",
  },
  btn: {
    color: colors.links,
    fontSize: hp(2.6),
    fontFamily: globalStyles.fonts.font_500,
    borderBottomWidth: hp(0.15),
    borderBottomColor: colors.links,
  },
});
