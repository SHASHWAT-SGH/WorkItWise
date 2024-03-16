import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MySafeAreaView from "../components/MySafeAreaView";
import Header from "../components/Header";
import colors from "../global/colors";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import globalStyles from "../global/styles";
import { axiosInstance } from "../utils/axiosInstance";
import exerciseApi from "../apis/exerciseInfo";
import { mediaApi } from "../apis/media";
import { useNavigation } from "@react-navigation/native";

const Card = ({ gifUrl, name, exerciseId }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={cardStyle.wrapper}
      onPress={() => {
        navigation.navigate("exerciseInformation", {
          exerciseId: exerciseId,
        });
      }}
    >
      <View style={cardStyle.left}>
        <Image
          source={
            mediaApi.EXERCISE_GIF +
            `/${gifUrl.split("/")[0]}/${gifUrl.split("/")[1]}.gif`
          }
          style={cardStyle.image}
        />
        {/* <Text>heheh</Text> */}
      </View>
      <View style={cardStyle.right}>
        <Text style={cardStyle.text} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ExerciseList = ({ route }) => {
  const [data, setData] = useState(null);
  const { category } = route.params;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchBasicExerciseInfo();
    setRefreshing(false);
  }, []);

  const fetchBasicExerciseInfo = async () => {
    await axiosInstance
      .get(exerciseApi.GET_EXERCISE_BASIC_DETAILS + `/${category}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBasicExerciseInfo();
  }, []);

  return (
    <MySafeAreaView>
      <Header screenName={category} showSearchBtn={true} showAddBtn={true} />
      <View style={styles.wrapper}>
        {data && (
          <FlatList
            style={styles.wrapper}
            data={data}
            onRefresh={() => onRefresh()}
            refreshing={refreshing}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                key={item.exerciseId}
                gifUrl={item.gifUrl}
                name={item.exerciseName}
                exerciseId={item.exerciseId}
              />
            )}
          />
        )}
      </View>
    </MySafeAreaView>
  );
};

export default ExerciseList;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: wp(2),
    // backgroundColor: "red",
    flex: 1,
  },
});

const cardStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.dark2,
    flexDirection: "row",
    borderRadius: wp(2),
    padding: wp(1),
    marginBottom: wp(3),
  },
  left: {
    flex: 1,
  },
  image: {
    width: wp(18),
    height: wp(18),
    flex: 1,
    borderRadius: wp(2),
    backgroundColor: colors.white,
  },
  right: {
    flex: 4,
    marginLeft: wp(8),
    justifyContent: "center",
  },
  text: {
    fontSize: hp(2.2),
    fontFamily: globalStyles.fonts.font_400,
    color: colors.white,
    textTransform: "capitalize",
  },
});
