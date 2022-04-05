import { AxiosResponse } from "axios";
import { OPEN_WEATHER_MAP_KEY } from "@env";
import { weatherInstance } from "@app/api";
import { AppDispatch, AppThunk } from "@app/redux/store";
import { ResponseError } from "@app/redux/api-models/common";
import { BaseResponse } from "@app/redux/api-models/weather";
import type { Coordinates } from "@app/types/location";

import { weatherActions } from "./slices";

const {
  setWeatherRequest,
  setWeatherSuccess,
  setWeatherFailure,
  resetWeather,
} = weatherActions;

const getCurrentWeatherData = (coordinates: Coordinates) => {
  const { latitude, longitude } = coordinates;

  return weatherInstance.get<BaseResponse>(
    `weather?lat=${String(latitude)}&lon=${String(
      longitude
    )}&appid=${OPEN_WEATHER_MAP_KEY}`
  );
};

const callWeatherApi =
  (payload: Coordinates): AppThunk =>
  async (dispatch: AppDispatch) => {
    const { latitude, longitude } = payload;

    if (!latitude || !longitude) return;

    try {
      dispatch(setWeatherRequest());

      const response: AxiosResponse<BaseResponse> = await getCurrentWeatherData(
        { latitude, longitude }
      );

      const data = response?.data;

      dispatch(
        setWeatherSuccess({
          temp: data.main.temp,
          description: data.weather[0].description,
          main: data.weather[0].main,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
        })
      );
    } catch (error) {
      dispatch(setWeatherFailure(error as ResponseError));
    }
  };

const actions = {
  callWeatherApi,
  resetWeather,
};

export default actions;
