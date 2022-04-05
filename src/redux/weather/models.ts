import * as weather from "@app/redux/api-models/weather";
import { ResponseState } from "@app/redux/api-models/common";

export type BaseWeatherResponse = weather.BaseResponse;
export type FormattedWeatherResponse = weather.FormattedResponse;

export type WeatherState = {
  weatherResponse: ResponseState<FormattedWeatherResponse>;
};
