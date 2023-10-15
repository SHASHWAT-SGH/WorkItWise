import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
// api url
import { API_URL } from "../../utils/axiosInstance";

const Card = ({ name, imgname }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: `${API_URL}/api/get/image?imgurl=${imgname}`,
          }}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292829",
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
    color: "white",
    fontWeight: "bold",
    marginTop: 6,
    textTransform: "capitalize",
  },
});
