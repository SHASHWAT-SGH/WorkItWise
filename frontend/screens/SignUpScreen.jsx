import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../global/colors";
import { Image } from "expo-image";
import useAuth from "../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
// axios
// import { setAxiosAuthToken } from "../utils/axiosInstance";
// import { axiosInstance } from "../utils/axiosInstance";
import MySafeAreaView from "../components/MySafeAreaView";
import globalStyles from "../global/styles";

const SignUpScreen = ({ navigation }) => {
  const { setIsAuthenticated } = useAuth();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    // await axiosInstance
    //   .post("/auth/login", {
    //     email: username,
    //     password: password,
    //   })
    //   .then((res) => {
    //     if (res.status == 202) {
    //       const token = res.data.access_token;
    //       setAxiosAuthToken(token);
    //       AsyncStorage.setItem("token", token);
    //       setIsAuthenticated(true);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <MySafeAreaView>
      <View style={styles.topWrapper}>
        <Image
          style={styles.img}
          source={require("../assets/images/exercise1.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.slogan}>Signup to use!</Text>
          <Text style={styles.heading}>WorkItWise</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            value={fname}
            style={styles.input}
            placeholder="First name"
            placeholderTextColor={colors.white}
            onChangeText={setFname}
            textContentType="name"
            autoCapitalize="none"
          />
          <TextInput
            value={lname}
            style={styles.input}
            placeholder="Last name"
            placeholderTextColor={colors.white}
            onChangeText={setLname}
            textContentType="name"
            autoCapitalize="none"
          />
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.white}
            onChangeText={setEmail}
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.white}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TextInput
            value={confirmPassword}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={colors.white}
            onChangeText={setConfirmPassword}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableHighlight
            style={styles.btn}
            activeOpacity={0.8}
            underlayColor={colors.color3}
            onPress={handleSubmit}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <Text style={styles.slogan}>
              Already have an account? Login insted
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  topWrapper: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: 18,
    width: 200,
    height: 200,
  },
  headingContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },

  heading: {
    fontSize: 29,
    fontFamily: globalStyles.fonts.font_600,
    color: colors.white,
  },
  slogan: {
    marginTop: 5,
    textAlign: "center",
    color: colors.dimWhite,
    opacity: 0.7,
    fontSize: 15,
    fontFamily: globalStyles.fonts.font_400,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 45,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: colors.dimWhite,
    color: colors.white,
    fontSize: 16,
    fontFamily: globalStyles.fonts.font_400,
  },
  btn: {
    backgroundColor: colors.white,
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    margin: 12,
    marginTop: 10,
  },
  btnText: {
    color: colors.dark2,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: 18,
  },
});
