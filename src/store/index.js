import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import commonReducer from '@/redux/common'
import authReducer from '@/redux/auth'

const reducers = combineReducers({
  common: commonReducer,
  auth: authReducer
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
});

export default store;
