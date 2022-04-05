/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0,
  },
  dividerContainer: {
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
  },
});

export default HeaderStyles;
