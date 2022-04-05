import React, { FC } from "react";
import { Header as RnHeader } from "react-native-elements";

import type { PropsType } from "./types";
import HeaderStyles from "./styles";
import { theme } from "@app/styles";
import { FontAwesome } from "@expo/vector-icons";

const Header: FC<PropsType> = (props) => {
  const {
    centerComponent,
    containerStyle,
    placement,
    rightComponent,
    barStyle,
    hasBottomDivider,
  } = props;

  return (
    <RnHeader
      statusBarProps={{
        backgroundColor: "transparent",
        translucent: true,
      }}
      placement={placement}
      barStyle={barStyle ?? "dark-content"}
      containerStyle={
        hasBottomDivider
          ? HeaderStyles.dividerContainer
          : [HeaderStyles.container, containerStyle]
      }
      leftComponent={
        <FontAwesome name="cloud" size={24} color={theme.colors.black} />
      }
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  );
};

export default Header;
