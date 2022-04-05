import axios, { AxiosInstance } from "axios";
import { LOCATION_API } from "@env";

const locationInstance: AxiosInstance = axios.create({
  baseURL: LOCATION_API,
});

export { locationInstance };
