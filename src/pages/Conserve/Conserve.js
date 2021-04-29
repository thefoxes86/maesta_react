import React, { useState, useEffect } from "react";
import FetchApi from "../../lib/fetchApi";
import TransitionPages from "../../components/TransitionPages";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";
import TitlePages from "../../components/TitlePages";

const ID = 55;

export default function Conserve(props) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    FetchApi("https://maestadellaformica.com/wp-json/wp/v2/pages/" + ID, {
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
    }).then((data) => {
      setPage(data);

      FetchApi(
        "https://maestadellaformica.com/wp-json/wp/v2/media/" +
          data.featured_media,
        {
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
        }
      ).then((imgRes) => {
        setImg(imgRes);
        setLoading(false);
      });
    });
  }, [loading]);

  !loading && getScrollPage();
  return (
    <React.Fragment>
      <TransitionPages>
        {!loading && (
          <div className="content content__page__first content--full">
            <TitlePages
              title={page.title.rendered}
              img={img.guid.rendered}
              pathColor={page.acf.path_color}
            />
          </div>
        )}
      </TransitionPages>
    </React.Fragment>
  );
}
