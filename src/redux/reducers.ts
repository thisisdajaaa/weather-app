import { combineReducers } from "@reduxjs/toolkit";
import { authReducers } from "./auth/slices";

const rootReducer = combineReducers({
  auth: authReducers,
});

export { rootReducer };
