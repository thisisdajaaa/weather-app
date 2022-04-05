import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  value: string;
  placeholder?: string;
  onChange?: (text: string) => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  maxLength?: number;
};
