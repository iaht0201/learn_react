import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
import App from "@/app";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@themes";
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>loading...</>} persistor={persistor}>
        <BrowserRouter>
          <Suspense>
            <I18nextProvider i18n={i18n}>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </I18nextProvider>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
