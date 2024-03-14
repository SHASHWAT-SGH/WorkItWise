import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import colors from "../global/colors";
import { Image } from "expo-image";
import useAuth, { AuthContext } from "../contexts/AuthContext";
import { storeAsyncData } from "../utils/asyncStorage";
import MySafeAreaView from "../components/MySafeAreaView";
import globalStyles from "../global/styles";
import authenticationApi from "../apis/authentication";
import { useToast } from "react-native-toast-notifications";
// axios
import { axiosInstance, setAxiosAuthToken } from "../utils/axiosInstance";

const SignUpScreen = ({ navigation }) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const toast = useToast();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    // check if passwords matches or not
    if (password === confirmPassword) {
      // if match then signup
      handleSignup();
    } else {
      // else show error
      toast.show("Passwords do not match.", {
        type: "danger",
      });
    }
  };

  const handleSignup = async () => {
    await axiosInstance
      .post(authenticationApi.SIGNUP_API, {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status == 200) {
          toast.show("Account created.", {
            type: "success",
          });
          const token = res.data.token;
          setAxiosAuthToken(token);
          storeAsyncData("AUTH_TOKEN", token);
          setIsAuthenticated(true);
          navigation.pop();
          navigation.replace("homeScreen");
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
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
        // console.error("Register response => ", response);
      });
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
          />
          <TextInput
            value={lname}
            style={styles.input}
            placeholder="Last name"
            placeholderTextColor={colors.white}
            onChangeText={setLname}
            textContentType="name"
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
