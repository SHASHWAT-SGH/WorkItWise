import AsyncStorage from "@react-native-async-storage/async-storage";

const storeAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error("Error in async storage");
  }
};

const getAsyncData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.error("Error in reading async storage");
  }
};

const removeAsyncData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Error in async storage");
  }
};

export { storeAsyncData, getAsyncData, removeAsyncData };
