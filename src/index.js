import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vini">
          <Category />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
