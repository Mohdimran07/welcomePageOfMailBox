import "./App.css";
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "./components/Form/form";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/Homepage";
import MailBoxContext from "./components/Store/MailboxContext";

function App() {
  const mailCtx = useContext(MailBoxContext);

  const isLoggedIn = mailCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
        {isLoggedIn && (
          <Route path="/home" exact>
            <HomePage />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/login">
            <Form />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
