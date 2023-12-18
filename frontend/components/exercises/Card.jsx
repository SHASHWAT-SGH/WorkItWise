import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { Image } from "expo-image";
// api url
import { API_URL } from "../../utils/axiosInstance";
import colors from "../../global/colors";

const Card = ({ name, imgname, navigation, navigationPath }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.1}
      underlayColor={colors.dark2}
      style={styles.container}
      onPress={() => {
        // console.log(name);
        navigation.navigate("ExerciseList", { exerciseCategory: name });
        // navigation.navigate(navigationPath, { exerciseCategory: name });
      }}
    >
      <>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={{
              uri: `${API_URL}/media/image/musclegrp?category=${
                imgname.split("/")[1]
              }`,
            }}
          />
        </View>
        <Text style={styles.text}>{name}</Text>
      </>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark1,
    width: 140,
    height: 140,
    borderRadius: 8,
    padding: 7,
    alignItems: "center",
    // elevation: 10,
  },
  imgWrapper: {
    alignItems: "center",
  },
  img: {
    width: 94,
    height: 94,
    // backgroundColor: "red",
  },
  text: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
    marginTop: 6,
    textTransform: "capitalize",
  },
});
