import { combineReducers } from "@reduxjs/toolkit";
import { weatherReducers } from "./weather/slices";
import { locationReducers } from "./location/slices";
import { authReducers } from "./auth/slices";

const rootReducer = combineReducers({
  auth: authReducers,
  location: locationReducers,
  weather: weatherReducers,
});

export { rootReducer };
