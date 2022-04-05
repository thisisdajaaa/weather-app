import type { RootStackParamList } from "@app/types/navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";

const WeatherScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "Weather">>();

  return (
    <Pressable onPress={goBack}>
      <Text style={{ marginTop: 300 }}>
        lat: {params.latitude}, lon: {params.longitude}
      </Text>
    </Pressable>
  );
};

export default WeatherScreen;
