import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import colors from "../../global/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MyBottomSheet = ({ bottomSheetRef, children }) => {
  const snapPoints = useMemo(() => ["30%", "60%"], []);

  const renderBackDrop = useCallback((props) => (
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  ));

  return (
    <BottomSheet
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      backdropComponent={renderBackDrop}
      handleIndicatorStyle={{
        backgroundColor: "grey",
      }}
      backgroundStyle={{
        backgroundColor: colors.dark2,
        borderColor: "grey",
        borderWidth: 1,
      }}
    >
      <BottomSheetScrollView
        style={{
          flex: 1,
          paddingHorizontal: wp(3),
        }}
      >
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
    // </View>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
