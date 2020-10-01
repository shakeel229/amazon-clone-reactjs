import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>checkout Page</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header></Header>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
            <h1>Home Page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
