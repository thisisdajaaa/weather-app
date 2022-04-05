import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const DataTableStyles = StyleSheet.create({
  table: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.grey100,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: theme.colors.grey100,
  },
  column: {
    padding: 8,
    borderLeftWidth: 1,
    borderColor: theme.colors.grey100,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  headers: {
    ...theme.textSemiBold,
  },
  field: {
    ...theme.textListItem,
  },
});

export default DataTableStyles;
