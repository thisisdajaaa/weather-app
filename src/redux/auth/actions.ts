import { AppDispatch, AppThunk } from "@app/redux/store";

import { authActions } from "./slices";

const { loginSucceeded, logoutSucceeded } = authActions;

const setAuthLogin = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(loginSucceeded());
};

const setAuthLogout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutSucceeded());
};

const actions = {
  setAuthLogin,
  setAuthLogout,
};

export default actions;
