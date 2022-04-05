/**
 *
 * Button
 * @format
 *
 */

import React, { FC } from "react";
import { Button as RnButton } from "react-native-elements";

import type { PropsType } from "./types";
import { OPACITY } from "./config";
import ButtonStyles from "./styles";

const Button: FC<PropsType> = (props) => {
  const {
    title,
    type = "solid",
    disabled,
    loading,
    icon,
    titleStyle,
    buttonStyle,
    containerStyle,
    onPress,
  } = props;

  return (
    <RnButton
      type={type}
      activeOpacity={OPACITY}
      raised
      icon={icon}
      title={title}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      titleStyle={titleStyle}
      buttonStyle={[ButtonStyles.container, buttonStyle]}
      containerStyle={containerStyle}
    />
  );
};

export default Button;
