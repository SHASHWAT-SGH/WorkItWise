import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import MyBottomSheet from "../components/bottomSheet/MyBottomSheet";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";

const Card = ({ gifUrl, name, exerciseId, showAddBtn, bottomSheetRef }) => {
  const navigation = useNavigation();

  const handleAddBtnPress = () => {
    bottomSheetRef.current?.expand();
  };
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
      {showAddBtn && (
        <View style={cardStyle.extremeRight}>
          <TouchableOpacity
            style={cardStyle.addBtn}
            onPress={handleAddBtnPress}
          >
            <MaterialIcons name="add" size={hp(3.4)} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ExerciseList = ({ route }) => {
  const [data, setData] = useState(null);
  const { category, showAddBtn } = route.params;
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

  const bottomSheetRef = useRef(null);

  const [selectedLanguage, setSelectedLanguage] = useState();

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
                showAddBtn={showAddBtn}
                bottomSheetRef={bottomSheetRef}
              />
            )}
          />
        )}
      </View>
      {/* bottom sheet */}
      <MyBottomSheet bottomSheetRef={bottomSheetRef}>
        <View style={bottomSheetStyle.container}>
          {/* layer 1  */}
          <View style={bottomSheetStyle.exerciseInfo}>
            <View style={bottomSheetStyle.exerciseInfoLeft}>
              <Image
                source={
                  "https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif"
                }
                style={bottomSheetStyle.image}
              />
            </View>
            <View style={bottomSheetStyle.exerciseInfoRight}>
              <Text style={bottomSheetStyle.heading}>
                alternate lateral pulldown
              </Text>
            </View>
          </View>
          {/* layer 2 */}
          <View style={bottomSheetStyle.layer2Container}>
            {/* Input field with name at top*/}
            <View style={bottomSheetStyle.smallContainers}>
              <View style={bottomSheetStyle.top}>
                <Text style={bottomSheetStyle.text}>Weight</Text>
              </View>
              <View style={bottomSheetStyle.bottom}>
                <BottomSheetTextInput
                  inputMode="numeric"
                  placeholder="0"
                  placeholderTextColor={colors.white}
                  style={bottomSheetStyle.input}
                />
              </View>
            </View>
            {/* Multiply Sign */}
            <View style={bottomSheetStyle.multiplyContainer}>
              <Entypo name="cross" size={24} color={colors.white} />
            </View>
            {/* Input field with name at top*/}
            <View style={bottomSheetStyle.smallContainers}>
              <View style={bottomSheetStyle.top}>
                <Text style={bottomSheetStyle.text}>Reps</Text>
              </View>
              <View style={bottomSheetStyle.bottom}>
                <BottomSheetTextInput
                  inputMode="numeric"
                  placeholder="0"
                  placeholderTextColor={colors.white}
                  style={bottomSheetStyle.input}
                />
              </View>
            </View>
            {/* Multiply Sign */}
            <View style={bottomSheetStyle.multiplyContainer}>
              <Entypo name="cross" size={24} color={colors.white} />
            </View>
            {/* Input field with name at top*/}
            <View style={bottomSheetStyle.smallContainers}>
              <View style={bottomSheetStyle.top}>
                <Text style={bottomSheetStyle.text}>Set</Text>
              </View>
              <View style={bottomSheetStyle.bottom}>
                <BottomSheetTextInput
                  inputMode="numeric"
                  placeholder="0"
                  placeholderTextColor={colors.white}
                  style={bottomSheetStyle.input}
                />
              </View>
            </View>
          </View>
          {/* layer 3 */}
          <View style={bottomSheetStyle.layer3}>
            <Picker
              style={{
                width: wp(60),
                backgroundColor: colors.dark3,
              }}
              itemStyle={{
                backgroundColor: colors.dark3,
              }}
              dropdownIconColor={colors.dark2}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              mode="dropdown"
              dropdownIconRippleColor={"transparent"}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          {/* Footer */}
          <View style={bottomSheetStyle.footer}>
            <TouchableOpacity style={bottomSheetStyle.addBtnFooter}>
              <Text style={bottomSheetStyle.addBtnFooterText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </MyBottomSheet>
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
  extremeRight: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  addBtn: {
    backgroundColor: colors.dark3,
    padding: hp(0.4),
    borderRadius: hp(1),
  },
});

const bottomSheetStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseInfo: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dimWhite,
    paddingBottom: wp(1.3),
    flexDirection: "row",
  },
  exerciseInfoLeft: {
    // backgroundColor: "red",
    // height: 50,
    flex: 1,
    justifyContent: "center",
  },
  exerciseInfoRight: {
    // backgroundColor: "green",
    // height: 50,
    flex: 3.5,
    justifyContent: "center",
    paddingLeft: wp(3),
  },
  image: {
    // alignSelf: "center",
    width: hp(9),
    height: hp(9),
    borderRadius: hp(1),
  },
  heading: {
    color: colors.white,
    fontFamily: globalStyles.fonts.font_400,
    textTransform: "capitalize",
    fontSize: hp(2.2),
  },
  layer2Container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: wp(5),
  },
  smallContainers: {
    // backgroundColor: "red",
    // width: 50,
    // height: 50,
    gap: hp(1),
  },
  multiplyContainer: {
    // backgroundColor: "green",
    justifyContent: "center",
    marginTop: hp(2.8),
  },
  top: {
    alignItems: "center",
  },
  bottom: {},
  text: {
    fontFamily: globalStyles.fonts.font_400,
    fontSize: hp(2),
    color: colors.white,
  },
  input: {
    backgroundColor: colors.dark3,
    borderRadius: hp(1),
    width: wp(16),
    height: wp(12),
    textAlign: "center",
    color: colors.white,
    fontFamily: globalStyles.fonts.font_400,
    fontSize: hp(3),
  },
  footer: {
    // backgroundColor: "red",
    marginTop: wp(4),
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnFooter: {
    backgroundColor: colors.white,
    padding: wp(2),
    paddingHorizontal: wp(30),
    borderRadius: hp(1),
  },
  addBtnFooterText: {
    fontSize: hp(2.2),
    fontFamily: globalStyles.fonts.font_500,
    color: colors.dark2,
  },
  layer3: {
    justifyContent: "center",
    alignItems: "center",
    padding: wp(2),
    marginTop: wp(3),
  },
});
