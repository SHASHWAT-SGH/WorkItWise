import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/dashboard/Header";
import DiaryTemplate from "../components/diaries/DiaryTemplate";

const Diaries = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Diaries" backIcon={true} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.baseWrapper}>
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={true}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem lorem ipsum"
          selected={false}
        />
      </ScrollView>
    </View>
  );
};

export default Diaries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  baseWrapper: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 50,
  },
});
