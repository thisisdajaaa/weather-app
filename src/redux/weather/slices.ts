import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseError } from "@app/redux/api-models/common";

import { initialState } from "./data";
import { FormattedWeatherResponse } from "./models";

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherRequest: (state) => {
      state.weatherResponse.isLoading = true;
    },
    setWeatherSuccess: (
      state,
      { payload }: PayloadAction<FormattedWeatherResponse>
    ) => {
      state.weatherResponse.isLoading = false;
      state.weatherResponse.response = payload;
    },
    setWeatherFailure: (state, { payload }: PayloadAction<ResponseError>) => {
      state.weatherResponse.isLoading = false;
      state.weatherResponse.error = payload;
    },
    resetWeather: () => initialState,
  },
});

const { actions: weatherActions, reducer: weatherReducers } = weatherSlice;

export { weatherActions, weatherReducers };
