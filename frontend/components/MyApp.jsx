import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ToastProvider } from "react-native-toast-notifications";
import { MaterialIcons } from "@expo/vector-icons";
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
import AuthenticationNavigation from "../navigations/AuthenticationNavigation";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../global/colors";
import { AuthContext } from "../contexts/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useContext, useEffect, useState } from "react";
import { getAsyncData } from "../utils/asyncStorage";
import keys from "../global/asyncStorage";
import { setAxiosAuthToken } from "../utils/axiosInstance";
import { ExerciseInfoContext } from "../contexts/ExerciseInfoContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function MyApp() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setExerciseInformation, setCategoryInformation } =
    useContext(ExerciseInfoContext);
  // splash screen configuration
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        const authToken = await getAsyncData(keys.AUTH_TOKEN);
        authToken ? setIsAuthenticated(true) : setIsAuthenticated(false);
        setAxiosAuthToken(authToken);
        const categoryDetails = JSON.parse(
          await getAsyncData(keys.CATEGORY_INFO)
        );
        categoryDetails
          ? setCategoryInformation(categoryDetails)
          : setCategoryInformation(null);
        const exerciseDetails = JSON.parse(
          await getAsyncData(keys.EXERCISE_INFO)
        );
        exerciseDetails
          ? setExerciseInformation(exerciseDetails)
          : setExerciseInformation(null);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const [fontsLoaded, fontError] = useFonts({
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

  const onLayoutRootView = useCallback(async () => {
    console.log("fonts loaded", fontsLoaded);
    if (appIsReady && fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded, fontError]);

  if (!appIsReady) {
    return null;
  }
  // over

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0e0b31", "#0c0a15"]}
        style={[
          styles.container,
          // { minHeight: Math.round(windowHeight) }
        ]}
        start={{ x: 0, y: 0.03 }}
        end={{ x: 0.32, y: 0.32 }}
        onLayout={onLayoutRootView}
      >
        <ToastProvider
          placement="bottom"
          duration={5000}
          animationType="slide-in"
          offset={50}
          swipeEnabled={true}
          dangerIcon={
            <MaterialIcons
              name="error-outline"
              size={24}
              color={colors.white}
            />
          }
        >
          <NavigationContainer>
            <AuthenticationNavigation />
          </NavigationContainer>
          {/* <TutorialScreen /> */}
          <StatusBar style="light" />
        </ToastProvider>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
