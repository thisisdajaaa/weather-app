import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth/slices";
import { locationReducers } from "./location/slices";

const rootReducer = combineReducers({
  auth: authReducers,
  location: locationReducers,
});

export { rootReducer };
