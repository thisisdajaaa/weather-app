import { ResponseState } from "@app/redux/api-models/common";
import { FormattedWeatherResponse, WeatherState } from "./models";

const initialWeather: FormattedWeatherResponse = {
  temp: null,
  description: null,
  main: null,
  pressure: null,
  humidity: null,
};

const initialWeatherResponse: ResponseState<FormattedWeatherResponse> = {
  isLoading: false,
  response: initialWeather,
};

export const initialState: WeatherState = {
  weatherResponse: initialWeatherResponse,
};
