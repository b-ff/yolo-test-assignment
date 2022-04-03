import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./components/GlobalStyle";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { config } from "./config";

const client = new ApolloClient({
  uri: config.uri,
  cache: new InMemoryCache(),
});

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
