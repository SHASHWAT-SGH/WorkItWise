import colors from "./colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const globalStyles = {
  fonts: {
    font_300: "Rubik_300Light",
    font_400: "Rubik_400Regular",
    font_500: "Rubik_500Medium",
    font_300_i: "Rubik_300Light_Italic",
    font_400_i: "Rubik_400Regular_Italic",
    font_500_i: "Rubik_500Medium_Italic",
    font_600: "Rubik_600SemiBold",
    font_600_i: "Rubik_600SemiBold_Italic",
    font_700: "Rubik_700Bold",
    font_700_i: "Rubik_700Bold_Italic",
    font_800: "Rubik_800ExtraBold",
    font_800_i: "Rubik_800ExtraBold_Italic",
    font_900: "Rubik_900Black",
    font_900_i: "Rubik_900Black_Italic",
  },
  h1: {
    fontFamily: "Rubik_500Medium",
    fontSize: hp(2.4),
    color: colors.white,
  },
};

export default globalStyles;
