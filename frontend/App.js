import { StatusBar } from "expo-status-bar";
import { StyleSheet, useWindowDimensions } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ToastProvider } from "react-native-toast-notifications";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";
import DiariesScreen from "./screens/DiariesScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AuthenticationNavigation from "./navigations/AuthenticationNavigation";
import { NavigationContainer } from "@react-navigation/native";
import TutorialScreen from "./screens/TutorialScreen";
import colors from "./global/colors";

export default function App() {
  const windowHeight = useWindowDimensions().height;

  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#0e0b31", "#0c0a15"]}
      style={[
        styles.container,
        // { minHeight: Math.round(windowHeight) }
      ]}
      start={{ x: 0, y: 0.03 }}
      end={{ x: 0.32, y: 0.32 }}
    >
      <ToastProvider
        placement="bottom"
        duration={5000}
        animationType="slide-in"
        offset={50}
        swipeEnabled={true}
        dangerIcon={
          <MaterialIcons name="error-outline" size={24} color={colors.white} />
        }
      >
        <NavigationContainer>
          <AuthenticationNavigation />
        </NavigationContainer>
        {/* <TutorialScreen /> */}
        <StatusBar style="light" />
      </ToastProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
