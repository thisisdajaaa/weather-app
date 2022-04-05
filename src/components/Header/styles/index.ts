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
    position: "absolute",
  },
  btnLogout: {
    borderRadius: 3,
    backgroundColor: theme.colors.dark100,
  },
  LogoutContainer: {
    width: 86,
    bottom: "15%",
    height: 0,
  },
});

export default HeaderStyles;
