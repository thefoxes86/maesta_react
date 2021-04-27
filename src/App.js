import Home from "./pages/Home";
import Luoghi from "./pages/Luoghi";
import Sapori from "./pages/Sapori";
import Volti from "./pages/Volti";
import Respiri from "./pages/Respiri";
import Page from "./pages/Page";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <ScrollTop>
      <main className="demo-1">
        <div data-scroll className="page page--layout-2">
          <Header title="Home" />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>
          <Footer />
        </div>
      </main>
    </ScrollTop>
  );
}

export default App;
