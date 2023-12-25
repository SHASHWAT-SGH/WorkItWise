import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DiaryTemplate from "../components/diaries/DiaryTemplate";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../global/colors";
import MySafeAreaView from "../components/MySafeAreaView";

const DiariesScreen = () => {
  const [diaryList, setDiaryList] = useState(null);

  const fetchData = async () => {
    //     await axiosInstance
    //       .get("/api/user/diary/get/diaries")
    //       .then((res) => {
    //         setDiaryList(res.data.data);
    //       })
    //       .catch((err) => console.log(err));
    setDiaryList([
      {
        diary_name: "Diary 1",
        diary_description: "Sample Diary",
        diary_id: 1,
      },
      {
        diary_name: "Diary 2",
        diary_description: "Sample Diary",
        diary_id: 2,
      },
      {
        diary_name: "Diary 3",
        diary_description: "Sample Diary",
        diary_id: 3,
      },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MySafeAreaView>
      <Header screenName={"My Diaries"} />
      <View style={styles.container}>
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
    </MySafeAreaView>
  );
};

export default DiariesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  baseWrapper: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  addBtn: {
    backgroundColor: colors.dark2,
    position: "absolute",
    bottom: 30,
    right: 30,
    padding: 10,
    borderRadius: 8,
  },
});
