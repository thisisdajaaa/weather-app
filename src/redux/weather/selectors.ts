import { RootState } from "../store";
import { initialState } from "./data";

export const weatherResponse = (state: RootState) =>
  state.weather.weatherResponse || initialState.weatherResponse;

const selectors = {
  weatherResponse,
};

export default selectors;
