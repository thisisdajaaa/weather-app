import { ReactElement } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";
import { IconObject } from "react-native-elements/dist/icons/Icon";

type HeaderIcon = IconObject & {
  icon?: string;
  text?: string;
  color?: string;
  style?: StyleProp<TextStyle>;
};

type HeaderSubComponent = ReactElement | TextProps | HeaderIcon;

export type PropsType = {
  hasBottomDivider?: boolean;
  centerComponent?: HeaderSubComponent;
};
