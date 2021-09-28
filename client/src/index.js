import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import configureAppStore from "./store/configStore";
import { Provider } from "react-redux";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
