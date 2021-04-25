import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Luoghi from "./pages/Luoghi";
import Sapori from "./pages/Sapori";
import Volti from "./pages/Volti";
import Respiri from "./pages/Respiri";
import Page from "./pages/Page";
import ScrollTop from "./components/ScrollTop";
import TransitionPages from "./components/TransitionPages";

import "./assets/index.scss";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ScrollTop>
        <main className="demo-1">
          <div data-scroll className="page page--layout-2">
            <TransitionPages>
              <Switch>
                <Route exact path="/">
                  <Home type="home" key={window.location.pathname} />
                </Route>
                <Route exact path="/luoghi-del-racconto">
                  <Luoghi
                    type="category"
                    cat="luoghi"
                    key={window.location.pathname}
                  />
                </Route>
                <Route exact path="/sapori-della-terra">
                  <Sapori
                    type="category"
                    cat="sapori"
                    key={window.location.pathname}
                  />
                </Route>
                <Route exact path="/volti-dell-altipiano">
                  <Volti
                    type="category"
                    cat="volti"
                    key={window.location.pathname}
                  />
                </Route>
                <Route exact path="/respiri-della-mente">
                  <Respiri
                    type="category"
                    cat="respiri"
                    key={window.location.pathname}
                  />
                </Route>
                <Route exact path="/contatti">
                  <Page
                    type="page"
                    title="contatti"
                    key={window.location.pathname}
                  />
                </Route>
              </Switch>
            </TransitionPages>
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
