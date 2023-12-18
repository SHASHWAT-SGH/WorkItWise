import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

export default function Test() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        swipeDirection="down"
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 22,
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
