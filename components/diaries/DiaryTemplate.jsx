import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DiaryTemplate = ({ name, description, selected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => console.log("Clicked")}>
          <View style={styles.flexRow}>
            <Text style={[styles.myFontColor, styles.myDiaryText]}>{name}</Text>
            {selected ? (
              <View style={styles.circle}>
                <Ionicons name="checkmark-outline" size={30} color="white" />
              </View>
            ) : null}
          </View>
          <Text style={[styles.description, styles.myFontColor]}>
            {description}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiaryTemplate;

const styles = StyleSheet.create({
  myFontColor: {
    color: "white",
  },
  container: {
    flex: 1,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    marginTop: 18,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: "#38304d",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  myDiaryText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    marginTop: 6,
    fontSize: 16,
  },
  circle: {
    backgroundColor: "#836ce0",
    borderRadius: 30,
    padding: 2,
  },
});
