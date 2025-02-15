import { createSlice } from "@reduxjs/toolkit";

const namespace = "auth";

const initialState = {
  user: {},
  isLogin: false,
  token: null,
  error: null
};

const slice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setAuthUser: (state, action) => ({
      ...state,
      user: action.payload
    }),
    setAuthLogin: (state, action) => ({
      ...state,
      isLogin: action.payload
    }),
    setAuthToken: (state, action) => ({
      ...state,
      token: action.payload
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload
    })
  }
});

export const { setAuthUser, setAuthLogin, setAuthToken, setError } =
  slice.actions;

export default slice.reducer;
