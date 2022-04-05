import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const WeatherStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 18,
    paddingTop: 96,
  },
  txtBack: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "700",
  },
  btnBack: {
    borderRadius: 3,
    backgroundColor: theme.colors.secondary,
  },
  backContainer: {
    width: 86,
    marginTop: 36,
    alignSelf: "flex-end",
  },
});

export default WeatherStyles;
