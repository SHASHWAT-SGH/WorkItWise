import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../global/colors";
import globalStyles from "../../global/styles";
import { Image } from "expo-image";
import { mediaApi } from "../../apis/media";
import { useNavigation } from "@react-navigation/native";

const Card = ({ imgUrl, name }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("exerciseList", {
          category: name,
          showAddBtn: true,
        });
      }}
    >
      <View style={styles.imageHolder}>
        <Image
          source={
            mediaApi.CATEGORY_IMAGE_API + "/" + imgUrl.split("/")[1] + ".png"
          }
          style={styles.image}
        />
      </View>
      <View style={styles.nameHolder}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark2,
    width: wp(37),
    height: wp(42),
    borderRadius: wp(2),
    padding: wp(2),
  },
  imageHolder: {
    flex: 4.2,
  },
  nameHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: globalStyles.fonts.font_500,
    fontSize: hp(2),
    color: colors.white,
    textTransform: "capitalize",
  },
  image: {
    flex: 1,
  },
});
