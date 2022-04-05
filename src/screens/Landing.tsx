import { View } from "react-native";
import React from "react";
import Header from "@app/components/Header";
import Text from "@app/components/Text";
import { theme } from "@app/styles";

const Landing = () => {
  return (
    <>
      <Header
        centerComponent={
          <Text text="Weather Forecast" textStyle={{ ...theme.textBold }} />
        }
      />
      <View></View>
    </>
  );
};

export default Landing;
