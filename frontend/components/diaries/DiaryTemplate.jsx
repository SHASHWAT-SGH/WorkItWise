import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../../global/styles";
import colors from "../../global/colors";

const DiaryTemplate = ({ name, description, selected }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <View style={{ position: "relative" }}>
      <Pressable
        style={styles.container}
        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
        android_ripple={{ color: colors.dark1 }}
      >
        <View style={styles.left}>
          <View style={styles.wrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <View style={styles.right}>
          {selected ? (
            <View style={styles.circle}>
              <AntDesign name="pushpino" size={24} color={colors.white} />
            </View>
          ) : null}
        </View>
      </Pressable>
      {isDropdownVisible ? (
        name.toLowerCase() == "my diary" ? (
          <View style={styles.dropdown}>
            <Pressable
              style={styles.option}
              android_ripple={{ color: colors.dark6 }}
            >
              <Text style={styles.text}>Select Diary</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.dropdown}>
            <Pressable
              style={styles.option}
              android_ripple={{ color: colors.dark6 }}
            >
              <Text style={styles.text}>Select Diary</Text>
            </Pressable>
            <Pressable
              style={styles.option}
              android_ripple={{ color: colors.dark6 }}
            >
              <Text style={styles.text}>Edit Diary</Text>
            </Pressable>
            <Pressable
              style={styles.option}
              android_ripple={{ color: colors.dark6 }}
            >
              <Text style={[styles.text, { color: colors.red }]}>
                Delete Diary
              </Text>
            </Pressable>
          </View>
        )
      ) : null}
    </View>
  );
};

export default DiaryTemplate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark2,
    borderRadius: 5,
    marginBottom: 8,
    minHeight: 90,
    padding: 12,
    flexDirection: "row",
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: 16,
  },
  description: {
    color: colors.dimWhite,
    fontFamily: globalStyles.fonts.font_400,
    marginTop: 1,
    fontSize: 13,
  },
  circle: {
    backgroundColor: colors.dark2,
    borderRadius: 40,
    padding: 4,
  },
  dropdown: {
    backgroundColor: colors.dark5,
    position: "absolute",
    top: 80,
    left: 10,
    borderRadius: 3,
    zIndex: 3,
  },
  text: {
    color: colors.white,
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: 16,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});
