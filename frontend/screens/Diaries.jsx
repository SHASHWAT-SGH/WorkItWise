import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/dashboard/Header";
import DiaryTemplate from "../components/diaries/DiaryTemplate";

const Diaries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Diaries" backIcon={true} />
      <ScrollView contentContainerStyle={styles.baseWrapper}>
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={true}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={false}
        />
        <DiaryTemplate
          name="My Diary"
          description="lorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsemlorem ipsem"
          selected={false}
        />
      </ScrollView>
    </SafeAreaView>
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
