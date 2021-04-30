import React, { useState, useEffect } from "react";
import FetchApi from "../../lib/fetchApi";
import TransitionPages from "../../components/TransitionPages";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";
import TitlePages from "../../components/TitlePages";
import Product from "../../components/Product";
import Path from "../../components/Path";

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
    <TransitionPages>
      {!loading && (
        <React.Fragment>
          <div className="content">
            <div className="content__page__first content--full">
              <TitlePages
                title={page.title.rendered}
                img={img.guid.rendered}
                pathColor={page.acf.path_color}
              />
            </div>
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="brown"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="green"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="yellow"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="red"
            />
            <Path position="right" image="img/img__2.png" pathColor="#e3672a" />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="brown"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="green"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="yellow"
            />
            <Product
              title="Tarassaco di sambuco"
              text="Cappero di sambuco prova ad assaggiarlo è molto molto buono"
              bgColor="red"
            />
          </div>
        </React.Fragment>
      )}
    </TransitionPages>
  );
}
