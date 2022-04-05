import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./data";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucceeded: (state) => {
      state.isAuthenticated = true;
    },
    logoutSucceeded: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const { actions: authActions, reducer: authReducers } = authSlice;

export { authActions, authReducers };
