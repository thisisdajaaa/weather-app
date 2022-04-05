import React, { FC } from "react";
import { Input as RnInput } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import type { PropsType } from "./types";
import InputStyles from "./styles";

const Input: FC<PropsType> = (props) => {
  const { placeholder, value, onChange, maxLength } = props;

  return (
    <RnInput
      value={value}
      placeholder={placeholder}
      returnKeyType="default"
      inputContainerStyle={InputStyles.inputContainer}
      keyboardType="default"
      onChangeText={onChange}
      maxLength={maxLength}
      errorStyle={InputStyles.txtError}
      leftIcon={<Ionicons name="search" size={24} color="black" />}
      containerStyle={InputStyles.container}
    />
  );
};

export default Input;
