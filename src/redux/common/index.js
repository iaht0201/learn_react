import { createSlice } from "@reduxjs/toolkit";

const namespace = "common";

const initialState = {
  loading: false,
  alert: {
    open: true,
    message: null,
    type: "success"
  },
  equalValues: true
};

const slice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload
    }),
    setAlert: (state, action) => ({
      ...state,
      alert: action.payload
    }),
    setEqualValues: (state, action) => ({
      ...state,
      equalValues: action.payload
    })
  }
});

export const { setLoading, setAlert, setEqualValues } = slice.actions;

export default slice.reducer;
