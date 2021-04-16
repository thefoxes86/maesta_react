import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { AnimatePresence } from "framer-motion";
import "./assets/index.scss";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <main className="demo-1">
        <div data-scroll className="page page--layout-2">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/vini">
                <Category />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </main>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
