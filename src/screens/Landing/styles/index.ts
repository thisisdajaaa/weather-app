import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const LandingStyles = StyleSheet.create({
  txtWeatherForecast: {
    ...theme.textBold,
  },
  container: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 96,
    backgroundColor: theme.colors.white,
  },
  txtWelcome: {
    ...theme.textRegular,
  },
  txtLogin: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "700",
  },
  btnLogin: {
    borderRadius: 3,
  },
  loginContainer: {
    width: 86,
    marginTop: 36,
  },
});

export default LandingStyles;
