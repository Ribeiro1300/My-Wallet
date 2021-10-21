import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewWithdraw from "./pages/NewWithdraw";
import Record from "./pages/Record";
import Register from "./pages/Register";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/newEntry">
          <NewEntry />
        </Route>
        <Route path="/newWithdraw">
          <NewWithdraw />
        </Route>
        <Route path="/records">
          <Record />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
