import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth/slices";
import { locationReducers } from "./location/slices";
import { weatherReducers } from "./weather/slices";

const rootReducer = combineReducers({
  auth: authReducers,
  location: locationReducers,
  weather: weatherReducers,
});

export { rootReducer };
