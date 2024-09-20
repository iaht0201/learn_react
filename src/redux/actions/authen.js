import {
  setAuthLogin,
  setAuthToken,
  setAuthUser,
  setError
} from "../slice/auth.js";
import { setLoading } from "../common/index.js";
import { postPutData } from "@/utils/request.js";
import {
  METHOD_POST,
  STATUS_200,
  TOKEN_NAME,
  VITE_REACT_APP_API
} from "@/utils/constants.js";

// Action login
export const login = (payload, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    postPutData({
      url: VITE_REACT_APP_API + "/account/login",
      method: METHOD_POST,
      payload: payload,
      onSuccess: (res) => {
        console.log(res);
        if (res && res.token !== "") {
          localStorage.setItem(TOKEN_NAME, res.token);
          dispatch(setAuthUser(res.token));
          dispatch(setAuthLogin(true));
          dispatch(setAuthToken(res.token));
          navigate("/");
        } else {
          dispatch(setError("Login failed. Please check your credentials."));
        }
      }
    });
  } catch (error) {
    dispatch(
      setError("An error occurred during login. Please try again later.")
    );
    dispatch(setLoading(false));
  }
};

// Action register
export const register = (payload, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    postPutData({
      url: VITE_REACT_APP_API + "/account",
      method: METHOD_POST,
      payload: payload,
      onSuccess: (res) => {
        if (res && res.statusCode === STATUS_200) {
          dispatch(setAuthUser());
          dispatch(setAuthLogin(true));
          dispatch(setAuthToken());
          navigate("/sign-in");
        } else {
          dispatch(setError());
        }
        dispatch(setLoading(false));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
// Action logout
export const logout = (navigate) => (dispatch) => {
  localStorage.removeItem(TOKEN_NAME);
  navigate("/");

  dispatch(logoutSuccess());

  try {
    dispatch(setLoading(true));
    postPutData({
      url: VITE_REACT_APP_API + "/logout",
      method: METHOD_POST,
      payload: payload,
      onSuccess: (res) => {
        if (res && res.statusCode === STATUS_200) {
          dispatch(setAuthUser());
          dispatch(setAuthLogin(false));
          dispatch(setAuthToken());
          navigate("/sign-in");
        } else {
          dispatch(setError());
        }
        dispatch(setLoading(false));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
