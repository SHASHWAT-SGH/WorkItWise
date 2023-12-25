import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import colors from "../../global/colors";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

export default function MyModal({ children, isModalVisible, setModalVisible }) {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        isVisible={isModalVisible}
        backdropColor={colors.dark4}
        onSwipeComplete={toggleModal}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        swipeDirection="down"
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={styles.contentContainer}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="grip-lines" size={24} color={colors.white} />
          </View>
          {/* <View>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View> */}
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {
    backgroundColor: colors.black,
    paddingTop: 15,
    height: windowHeight - 30,
  },
});
