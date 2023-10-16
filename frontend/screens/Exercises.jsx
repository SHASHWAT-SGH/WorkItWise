import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import Card from "../components/exercises/Card";
import DrawerScreenWrapper from "../components/wrappers/DrawerScreenWrapper";
// axios
import { axiosInstance } from "../utils/axiosInstance";

const Exercises = ({ navigation }) => {
  const { openDrawer } = navigation;
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
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.container}>
        <Header title="Exercises" openDrawer={openDrawer} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardContainer}>
            {exerciseCategories
              ? exerciseCategories.map((item, index) => {
                  return (
                    <Card
                      name={item.category}
                      imgname={item.image_url}
                      key={index}
                    />
                  );
                })
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Exercises;

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
