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
    marginTop: 36,
    alignSelf: "center",
  },
  errorMessage: {
    ...theme.textLight,
    color: theme.colors.red100,
    marginLeft: 14,
    marginTop: 4,
  },
});

export default HomeStyles;
