import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import axios from "axios";

const Card = ({ imgname }) => {
  // const SERVER_URL = "http://192.168.191.156:8000/api/get/image";

  // const [imagesrc, setImagesrc] = useState();

  // const fetchImage = async () => {
  //   await axios
  //     .get(SERVER_URL, {
  //       params: {
  //         imgurl: "back",
  //       },
  //     })
  //     .then((res) => {
  //       const img = res.data;
  //       setImagesrc(img);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log("Status Code:", error.response.status);
  //         console.log("Data:", error.response.data);
  //       } else {
  //         console.error("Request failed:", error.message);
  //       }
  //     });
  // };

  // useEffect(() => {
  //   console.log("sd");
  //   fetchImage();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: `http://192.168.191.156:8000/api/get/image?imgurl=${imgname}`,
          }}
        />
      </View>
      <Text style={styles.text}>{imgname}</Text>
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
