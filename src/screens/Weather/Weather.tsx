import React from "react";
import { View } from "react-native";
import { useMount } from "@app/hooks";
import { actions, selectors } from "@app/redux/weather";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import type { RootStackParamList } from "@app/types/navigation";
import Header from "@app/components/Header";
import DataTable from "@app/components/DataTable";
import Button from "@app/components/Button";

import WeatherStyles from "./styles";

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "Weather">>();
  const { date, temp } = useSelector(selectors.weatherResponse).response;

  useMount(() => dispatch(actions.callWeatherApi(params)));

  const tableData = [
    ["Date (mm/dd/yyyy)", "Temp(F)"],
    [date, String(temp)],
  ];

  return (
    <>
      <Header hasBottomDivider />

      <View style={WeatherStyles.container}>
        <DataTable tableData={tableData} />

        <Button
          title="Back"
          buttonStyle={WeatherStyles.btnBack}
          containerStyle={WeatherStyles.backContainer}
          titleStyle={WeatherStyles.txtBack}
          onPress={goBack}
        />
      </View>
    </>
  );
};

export default WeatherScreen;
