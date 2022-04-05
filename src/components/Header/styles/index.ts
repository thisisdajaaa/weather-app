import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 0,
  },
  dividerContainer: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 1,
  },
  txtLogout: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "700",
  },
  btnLogout: {
    borderRadius: 3,
    backgroundColor: theme.colors.secondary,
  },
  logoutContainer: {
    width: 86,
  },
});

export default HeaderStyles;
