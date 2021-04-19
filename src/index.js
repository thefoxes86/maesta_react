import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Page from "./pages/Page";
import ScrollTop from "./components/ScrollTop";

import "./assets/index.scss";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ScrollTop>
        <main className="demo-1">
          <div data-scroll className="page page--layout-2">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/luoghi-del-racconto">
                <Category cat="luoghi" />
              </Route>
              <Route exact path="/sapori-della-terra">
                <Category cat="sapori" />
              </Route>
              <Route exact path="/volti-dell-altipiano">
                <Category cat="volti" />
              </Route>
              <Route exact path="/respiri-della-mente">
                <Category cat="respiri" />
              </Route>
              <Route exact path="/contatti">
                <Page title="contatti" />
              </Route>
            </Switch>
          </div>
        </main>
      </ScrollTop>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
