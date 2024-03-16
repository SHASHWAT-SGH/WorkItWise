import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import colors from "../global/colors";
import { Image } from "expo-image";
import useAuth, { AuthContext } from "../contexts/AuthContext";
// axios
import { axiosInstance, setAxiosAuthToken } from "../utils/axiosInstance";
import MySafeAreaView from "../components/MySafeAreaView";
import globalStyles from "../global/styles";
import authenticationApi from "../apis/authentication";
import { removeAsyncData, storeAsyncData } from "../utils/asyncStorage";
import { useToast } from "react-native-toast-notifications";
import keys from "../global/asyncStorage";

const LoginScreen = ({ navigation }) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (username.length > 3 && password.length > 5) {
      handleLogin();
    } else {
      toast.show("Email and password required", {
        type: "danger",
      });
    }
  };

  const handleLogin = async () => {
    setAxiosAuthToken(null);
    await axiosInstance
      .post(authenticationApi.LOGIN_API, {
        email: username,
        password: password,
      })
      .then((res) => {
        if (res.status == 200) {
          toast.show("Login success.", {
            type: "success",
          });
          console.log(res.data);
          const token = res.data.token;
          setAxiosAuthToken(token);
          storeAsyncData(keys.AUTH_TOKEN, token);
          setIsAuthenticated(true);
          navigation.replace("homeScreen");
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
        removeAsyncData(keys.AUTH_TOKEN);
        console.error(error.response.data);
        const response = error.response.data;
        if (typeof response === "object") {
          Object.keys(response).forEach((key) => {
            toast.show(response[key], {
              type: "danger",
            });
          });
        } else {
          toast.show(response, {
            type: "danger",
          });
        }
      });
  };

  return (
    <MySafeAreaView>
      <View style={styles.topWrapper}>
        <Image
          style={styles.img}
          source={require("../assets/images/loginPageIllustration.png")}
        />
      </View>
      <ScrollView>
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
          <TouchableHighlight
            style={styles.btn}
            activeOpacity={0.8}
            underlayColor={colors.color3}
            onPress={handleSubmit}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => {
              navigation.push("signUpScreen");
            }}
          >
            <Text style={styles.slogan}>Don't have an account? SignUp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 15 }}>
            <Text style={[styles.slogan, { opacity: 1 }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  topWrapper: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { borderRadius: 18, width: 200, height: 200 },
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
    margin: 12,
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
    marginTop: 20,
  },
  btnText: {
    color: colors.dark2,
    fontFamily: globalStyles.fonts.font_500,
    fontSize: 18,
  },
});
