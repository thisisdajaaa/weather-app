import { AppDispatch, AppThunk } from "@app/redux/store";

import { authActions } from "./slices";

const { loginSucceeded, logoutSucceeded } = authActions;

/**
 * Sets isAuthenticated to true
 * @returns void
 */
const setAuthLogin = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(loginSucceeded());
};

/**
 * Sets isAuthenticated to false
 * @returns void
 */
const setAuthLogout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutSucceeded());
};

const actions = {
  setAuthLogin,
  setAuthLogout,
};

export default actions;
