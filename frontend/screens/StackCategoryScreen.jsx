import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import MySafeAreaView from "../components/MySafeAreaView";
import Card from "../components/categories/Card";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../global/colors";
import DrawerScreenWrapper from "../wrappers/DrawerScreenWrapper";
import { axiosInstance } from "../utils/axiosInstance";
import categoryApi from "../apis/category";
import { AuthContext } from "../contexts/AuthContext";
import { removeAsyncData } from "../utils/asyncStorage";
import keys from "../global/asyncStorage";
import { useToast } from "react-native-toast-notifications";
import { checkJwtError } from "../utils/checkJwtError";

const StackCategoryScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const toast = useToast();

  const fetchData = async () => {
    await axiosInstance
      .get(categoryApi.GET_ALL_CATEGORIES_API)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setRefreshing(false);
        }
      })
      .catch((err) => {
        checkJwtError(err, setIsAuthenticated, toast);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  return (
    <>
      <MySafeAreaView>
        <Header screenName={"Categories"} showAddBtn={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={20}
            />
          }
        >
          <View style={styles.container}>
            {data
              ? data.data.map((item) => {
                  return (
                    <Card
                      key={item.categoryId}
                      name={item.category}
                      imgUrl={item.imageUrl}
                    />
                  );
                })
              : null}
          </View>
        </ScrollView>
      </MySafeAreaView>
    </>
  );
};

export default StackCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    // alignItems: "center",
    gap: wp(8),
    paddingBottom: hp(4),
    paddingTop: hp(2),
  },
});
