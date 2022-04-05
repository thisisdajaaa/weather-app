import React from "react";
import { View, Text } from "react-native";
import Header from "@app/components/Header";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Header hasBottomDivider />

      <View>
        <Text>HomeScreen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
