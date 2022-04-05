import axios, { AxiosInstance } from "axios";
import { OPEN_WEATHER_MAP_API } from "@env";

const weatherInstance: AxiosInstance = axios.create({
  baseURL: OPEN_WEATHER_MAP_API,
});

export { weatherInstance };
