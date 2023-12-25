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
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../global/colors";
import { Image } from "expo-image";
import useAuth from "../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
// axios
import { setAxiosAuthToken } from "../utils/axiosInstance";
import { axiosInstance } from "../utils/axiosInstance";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await axiosInstance
      .post("/auth/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        if (res.status == 202) {
          const token = res.data.access_token;
          setAxiosAuthToken(token);
          AsyncStorage.setItem("token", token);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.img}
            source={require("../assets/Images/logo/logo.png")}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>WorkItWise</Text>
          <Text style={styles.slogan}>
            Unlock Your Full Potential With WorkItWise: Where Every Rep Counts!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            value={username}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.white}
            onChangeText={setUsername}
            textContentType="emailAddress"
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.white}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry={true}
          />
          <TouchableHighlight
            style={styles.btn}
            activeOpacity={0.8}
            underlayColor={colors.color3}
            onPress={handleSubmit}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableOpacity>
            <Text style={styles.slogan}>Don't have an account? SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={[styles.slogan, { opacity: 1 }, { marginTop: 60 }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    flex: 1,
  },
  topWrapper: {
    height: 300,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: colors.color2,
  },
  img: { borderRadius: 18, width: 200, height: 200 },
  scroll: {},
  headingContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
  },

  heading: {
    fontSize: 29,
    fontWeight: "bold",
    color: colors.white,
  },
  slogan: {
    marginTop: 5,
    textAlign: "center",
    color: colors.dimWhite,
    opacity: 0.7,
    fontSize: 15,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: colors.dimWhite,
    color: colors.white,
    fontSize: 16,
  },
  btn: {
    backgroundColor: colors.white,
    // width: 200,
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    margin: 12,
    marginTop: 20,
  },
  btnText: {
    color: colors.color1,
    fontWeight: "bold",
    fontSize: 18,
  },
});
