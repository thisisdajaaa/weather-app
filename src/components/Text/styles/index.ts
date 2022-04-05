import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const TextStyles = StyleSheet.create({
  text: {
    ...theme.textRegular,
    color: theme.colors.dark200,
    fontWeight: "400",
  },
});

export default TextStyles;
