/**
 *
 * @format
 *
 */

import { ReactElement } from "react";
import { StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";
import { IconObject } from "react-native-elements/dist/icons/Icon";

type HeaderIcon = IconObject & {
  icon?: string;
  text?: string;
  color?: string;
  style?: StyleProp<TextStyle>;
};

type HeaderSubComponent = ReactElement | TextProps | HeaderIcon;

type Placement = "left" | "center" | "right";

type BarStyle = "default" | "light-content" | "dark-content";

export type PropsType = {
  hasBottomDivider?: boolean;
  barStyle?: BarStyle;
  placement?: Placement;
  containerStyle?: StyleProp<ViewStyle>;
  leftComponent?: HeaderSubComponent;
  centerComponent?: HeaderSubComponent;
  rightComponent?: HeaderSubComponent;
};
