import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 36,
    paddingTop: 96,
  },
  btnDisplay: {
    borderRadius: 3,
  },
  displayContainer: {
    width: 180,
    marginTop: 16,
    alignSelf: "center",
  },
});

export default HomeStyles;
