import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/dashboard/Header";
import DiaryTemplate from "../components/diaries/DiaryTemplate";
import { MaterialIcons } from "@expo/vector-icons";
import { axiosInstance } from "../utils/axiosInstance";
import colors from "../global/colors";

const Diaries = ({ navigation }) => {
  const [diaryList, setDiaryList] = useState(null);

  const fetchData = async () => {
    await axiosInstance
      .get("/api/user/diary/get/diaries")
      .then((res) => {
        setDiaryList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header title="Diaries" backIcon={true} navigation={navigation} />
        <ScrollView contentContainerStyle={styles.baseWrapper}>
          {diaryList
            ? diaryList.map((item) => {
                return (
                  <DiaryTemplate
                    name={item.diary_name}
                    description={item.diary_description}
                    selected={
                      item.diary_name.toLowerCase() == "my diary" ? true : false
                    }
                    key={item.diary_id}
                  />
                );
              })
            : null}
        </ScrollView>
      </View>
      <Pressable
        activeOpacity={0.6}
        underlayColor={colors.color3}
        style={styles.addBtn}
        android_ripple={{ color: colors.color2 }}
        onPress={() => {
          // navigation.navigate("ModalViewExercises");
        }}
      >
        <MaterialIcons name="add" size={35} color={colors.white} />
      </Pressable>
    </>
  );
};

export default Diaries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },
  baseWrapper: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 50,
  },
  addBtn: {
    backgroundColor: colors.color1,
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 10,
    borderRadius: 8,
  },
});
