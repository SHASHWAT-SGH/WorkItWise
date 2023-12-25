import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import { useWindowDimensions } from "react-native";

data = [
  { name: "page1" },
  { name: "page2" },
  { name: "page3" },
  { name: "page4" },
  { name: "page5" },
  { name: "page6" },
  { name: "page7" },
  { name: "page8" },
  { name: "page9" },
  { name: "page10" },
  { name: "page30" },
  { name: "page40" },
  { name: "page50" },
  { name: "page60" },
  { name: "page70" },
  { name: "page80" },
];

const windowWidth = Dimensions.get("window").width - 30;

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        height: 30,
        margin: 2,
        backgroundColor: "green",
        width: windowWidth,
      }}
    >
      {console.log(windowWidth)}
      <Text style={{ color: "white" }}>{item.name}</Text>
    </View>
  );
};

const Test = () => {
  const windowWidth = useWindowDimensions().width;
  return (
    <MySafeAreaView>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          horizontal={true}
          pagingEnabled={true}
        />
      </View>
    </MySafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({});
