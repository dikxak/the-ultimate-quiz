import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "@/assets/scss/index.scss";

import store from "@/store/index.js";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
