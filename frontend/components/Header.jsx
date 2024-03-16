import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../global/colors";
import globalStyles from "../global/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { getAsyncData, removeAsyncData } from "../utils/asyncStorage";
import keys from "../global/asyncStorage";
import { AuthContext } from "../contexts/AuthContext";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  showMenu,
  screenName,
  showUserIcon,
  showAddBtn,
  showSearchBtn,
}) => {
  const toast = useToast();
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      {/* menu icon or back button*/}
      {showMenu ? (
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <View style={styles.menuIcon}>
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
            <FontAwesome name="square" size={12} color={colors.white} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View>
            <Ionicons name="arrow-back" size={hp(3.4)} color={colors.white} />
          </View>
        </TouchableOpacity>
      )}
      {/* Name of Screen */}
      <View style={styles.screenName}>
        <Text style={globalStyles.h1}>{screenName}</Text>
      </View>
      {/* User Icon */}
      {showUserIcon ? (
        <TouchableOpacity
          style={styles.userNameIcon}
          onPress={() => {
            removeAsyncData(keys.AUTH_TOKEN);
            setIsAuthenticated(false);
            toast.show("Logout Success.", {
              type: "success",
            });
          }}
        >
          <Text style={[styles.userNameLetter]}>S</Text>
        </TouchableOpacity>
      ) : null}
      {/* Search button */}
      {showSearchBtn ? (
        <TouchableOpacity style={styles.navBtn}>
          <View style={{ marginRight: wp(2) }}>
            <MaterialIcons name="search" size={hp(3.4)} color={colors.white} />
          </View>
        </TouchableOpacity>
      ) : null}
      {/* Add button */}
      {showAddBtn ? (
        <TouchableOpacity style={styles.navBtn}>
          <View>
            <MaterialIcons name="add" size={hp(3.4)} color={colors.white} />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  navBar: {
    height: hp(4.6),
    // flex: 0.1,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: hp(2.4),
    // backgroundColor: "green",
  },
  navBtn: {
    borderRadius: 6,
  },
  menuIcon: {
    width: wp(6.6),
    flexDirection: "row",
    columnGap: 1.8,
    flexWrap: "wrap",
  },
  screenName: {
    flex: 1,
    alignItems: "center",
  },
  userNameIcon: {
    width: wp(9),
    height: wp(9),
    borderRadius: 8,
    backgroundColor: colors.dark2,
    marginLeft: "auto",
    marginRight: 10,
  },
  userNameLetter: {
    flex: 1,
    fontSize: hp(3.4),
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.white,
    fontFamily: globalStyles.fonts.font_400,
  },
});
