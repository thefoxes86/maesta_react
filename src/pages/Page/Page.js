import React from "react";
import FetchApi from "../../lib/fetchApi";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import "../../assets/js/scrollingImagesEffect";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";

import TransitionPages from "../../components/TransitionPages";

export default function Page(props) {
  const posts = FetchApi("https://maestadellaformica.com/wp-json/wp/v2/posts", {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
  });

  return (
    <React.Fragment>
      <Header title={props.page} />
      <Menu />
      <TransitionPages>
        {posts &&
          posts.map((post, index) => <h1>Categoria {post.title.rendered}</h1>)}
      </TransitionPages>
    </React.Fragment>
  );
}
