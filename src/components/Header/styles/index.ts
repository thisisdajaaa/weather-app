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
  txtLogout: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "700",
  },
  btnLogout: {
    borderRadius: 3,
    backgroundColor: theme.colors.dark100,
  },
  logoutContainer: {
    width: 86,
  },
});

export default HeaderStyles;
