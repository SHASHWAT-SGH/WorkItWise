import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/test/Card";
import axios from "axios";

const TestScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setData(res.data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SafeAreaView>
      {
        <FlatList
          data={data}
          renderItem={() => <Card />}
          keyExtractor={data.id}
        />
      }
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
