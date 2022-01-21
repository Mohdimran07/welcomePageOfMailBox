import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MailBoxContextProvider } from "./components/Store/MailboxContext";
// import { MailBoxContextProvider } from "./components/store/MailBoxContext";

ReactDOM.render(
  <MailBoxContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </MailBoxContextProvider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
