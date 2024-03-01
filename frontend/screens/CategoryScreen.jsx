import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import MySafeAreaView from "../components/MySafeAreaView";
import Card from "../components/categories/Card";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../global/colors";

// import { useToast } from "react-native-toast-notifications";

const CategoryScreen = () => {
  // const toast = useToast();
  // useEffect(() => {
  //   toast.show("Hello World", {
  //     type: "success",
  //     placement: "bottom",
  //     duration: 4000,
  //     offset: 30,
  //     animationType: "slide-in",
  //   });
  // }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <MySafeAreaView>
      <Header
        screenName={"Categories"}
        showAddBtn={true}
        showSearchBtn={true}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.dark1]}
            progressBackgroundColor={colors.links}
            progressViewOffset={20}
          />
        }
      >
        <View style={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default CategoryScreen;

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
