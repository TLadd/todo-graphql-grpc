// @flow

import React from "react";
import ReactDOM from "react-dom";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
