import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import colors from "../global/colors";
import { axiosInstance } from "../utils/axiosInstance";
import { Image } from "expo-image";
import { API_URL } from "../utils/axiosInstance";

const Item = ({ exerciseInfo }) => {
  const { EXERCISE_NAME, ANIMATED_IMAGE_URL } = exerciseInfo;
  return (
    <TouchableHighlight
      style={styles.exerciseItem}
      activeOpacity={0.1}
      underlayColor={colors.dark2}
      onPress={() => {
        console.log("ckick");
      }}
    >
      <>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={{
              uri: `${API_URL}/api/get/gif?location=${ANIMATED_IMAGE_URL}`,
            }}
          />
        </View>
        <Text style={styles.exerciseItemText}>{EXERCISE_NAME}</Text>
      </>
    </TouchableHighlight>
  );
};

const ExerciseList = ({ navigation, route }) => {
  const { exerciseCategory } = route.params;
  const [data, setData] = useState(null);
  const [length, setLength] = useState(null);

  const fetchExercises = async () => {
    await axiosInstance
      .get("/api/get/exercisebycategory", {
        params: {
          category: exerciseCategory,
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLength(res.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={exerciseCategory}
        backIcon={true}
        navigation={navigation}
        exerciseCount={length}
      />
      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <Item exerciseInfo={item} key={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExerciseList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  listWrapper: {
    flex: 1,
    // backgroundColor: "red",
    padding: 14,
  },
  exerciseItem: {
    backgroundColor: colors.dark1,
    marginBottom: 12,
    padding: 8,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
  },
  exerciseItemText: {
    color: colors.white,
    fontSize: 17,
    // backgroundColor: "red",
    textTransform: "capitalize",
    width: 210,
  },
  imgWrapper: {
    alignItems: "center",
    marginRight: 15,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  img: {
    width: 60,
    height: 60,
    // backgroundColor: "red",
  },
});
