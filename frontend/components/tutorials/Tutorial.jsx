import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import colors from "../../global/colors";
import MySafeAreaView from "../MySafeAreaView";
import globalStyles from "../../global/styles";
import { storeAsyncData } from "../../utils/asyncStorage";

const Tutorial = ({ illustratorUrl, titleText, subText }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <MySafeAreaView>
      {/* -24 is because save area view has padding horizontal 12*/}
      <View style={{ flex: 1, width: windowWidth - 24 }}>
        <View style={[styles.top]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.topText}>SKIP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <Image
            style={styles.image}
            source={illustratorUrl}
            contentFit="cover"
          />
          <Text style={styles.middleHeader}>{titleText}</Text>
          <Text style={styles.middleText}>{subText}</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              storeAsyncData(firstTime, false);
            }}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MySafeAreaView>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  top: {
    flex: 0.05,
    alignItems: "flex-end",
    marginRight: 10,
  },
  topText: {
    fontSize: 17,
    color: colors.white,
    fontFamily: globalStyles.fonts.font_500,
  },
  middle: {
    flex: 0.75,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  middleHeader: {
    flex: 0.4,
    fontSize: 32,
    textAlign: "center",
    paddingTop: 25,
    fontFamily: globalStyles.fonts.font_500,
    color: colors.white,
  },
  middleText: {
    flex: 0.3,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: colors.dimWhite,
    fontFamily: globalStyles.fonts.font_300,
  },
  bottom: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  continueBtn: {
    backgroundColor: colors.white,
    width: 220,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  continueText: {
    fontSize: 15,
    fontFamily: globalStyles.fonts.font_500,
    color: colors.dark2,
    textAlign: "center",
  },
});
