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
    containerStyle,
    buttonStyle,
    titleStyle,
    onPress,
  } = props;

  return (
    <RnButton
      title={title}
      activeOpacity={OPACITY}
      titleStyle={titleStyle}
      buttonStyle={[ButtonStyles.container, buttonStyle]}
      containerStyle={containerStyle}
      onPress={onPress}
      disabled={disabled}
      type={type}
      loading={loading}
    />
  );
};

export default Button;
