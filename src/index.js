// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM에서 createRoot 사용
import App from "./App";
import GlobalStyle from "./Styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
