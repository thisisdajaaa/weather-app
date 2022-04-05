import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const InputStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.grey200,
  },
  txtError: {
    display: "none",
  },
});

export default InputStyles;
