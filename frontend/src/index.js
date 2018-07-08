// @flow

import React from "react";
import ReactDOM from "react-dom";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    rootElement
  );
}
