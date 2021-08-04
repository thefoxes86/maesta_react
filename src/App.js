import Home from "./pages/Home";
import Luoghi from "./pages/Luoghi";
import Sapori from "./pages/Sapori";
import Volti from "./pages/Volti";
import Respiri from "./pages/Respiri";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import Vino from "./pages/Vino";
import Frutta from "./pages/Frutta";
import Conserve from "./pages/Conserve";
import Altro from "./pages/Altro";
import Comunicazioni from "./pages/Comunicazioni";
import SimpleReactLightbox from "simple-react-lightbox";
import FetchApi from "./lib/fetchApi";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Post from "./pages/Post";
import ScrollToTop from "./components/ScrollToTop/ScrollTop";

function App() {
  const location = useLocation();
  const [postsRoute, setPostsRoute] = useState([]);
  const mainDiv = useRef();

  useEffect(() => {
    // Mount Component
    FetchApi("https://maestadellaformica.com/wp-json/wp/v2/posts/", {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
    }).then((resPosts) => {
      setPostsRoute(resPosts);
    });

    // Unmount Component
    return () => {};
  }, []);
  return (
    <SimpleReactLightbox>
      <ScrollTop>
        <main className="demo-1" ref={mainDiv}>
          <div data-scroll className="page page--layout-2">
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

                <Route exact path="/vino">
                  <Vino type="page" key={window.location.pathname} />
                </Route>
                <Route exact path="/conserve">
                  <Conserve type="page" key={window.location.pathname} />
                </Route>
                <Route exact path="/frutta">
                  <Frutta type="page" key={window.location.pathname} />
                </Route>
                <Route exact path="/altro">
                  <Altro type="page" key={window.location.pathname} />
                </Route>
                <Route exact path="/parole-dal-mondo">
                  <Comunicazioni type="page" key={window.location.pathname} />
                </Route>

                {postsRoute &&
                  postsRoute.map((post) => (
                    <Route key={post.slug} exact path={`/${post.slug}`}>
                      <Post data={post} />
                    </Route>
                  ))}
              </Switch>
              <Footer />
            </AnimatePresence>
          </div>
        </main>
        <ScrollToTop />
      </ScrollTop>
    </SimpleReactLightbox>
  );
}

export default App;
