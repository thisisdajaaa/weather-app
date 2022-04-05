import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const ProfileStyles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
  },
  txtLabel: {
    ...theme.textSemiBold,
  },
  txtValue: {
    ...theme.textRegular,
  },
});

export default ProfileStyles;
