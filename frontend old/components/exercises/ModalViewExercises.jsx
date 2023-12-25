import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../dashboard/Header";
import Card from "../exercises/Card";
// axios
import { axiosInstance } from "../../utils/axiosInstance";

const ModalViewExercises = ({ navigation }) => {
  const [exerciseCategories, setExerciseCategories] = useState(null);

  const fetchCategoryData = async () => {
    await axiosInstance
      .get("/api/get/allexercisecategories")
      .then((res) => {
        setExerciseCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {exerciseCategories
            ? exerciseCategories.map((item, index) => {
                return (
                  <Card
                    name={item.category}
                    imgname={item.image_url}
                    key={index}
                    navigation={navigation}
                    navigationPath={""}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default ModalViewExercises;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  scrollView: {
    // backgroundColor: "red",
    padding: 20,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "green",
    flexWrap: "wrap",
    gap: 21,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
});
