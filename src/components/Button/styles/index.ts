/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ButtonStyles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.colors.primary,
    padding: 16,
  },
});

export default ButtonStyles;
