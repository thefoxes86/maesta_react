import React, { useState, useEffect } from "react";
import FetchApi from "../../lib/fetchApi";
import TitlePages from "../../components/TitlePages";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";
import TransitionPages from "../../components/TransitionPages";
import Product from "../../components/Product";
import Path from "../../components/Path";
import ButtonsProducts from "../../components/ButtonsProducts";
import ParallaxProduct from "../../components/ParallaxProduct";
import Parallax from "../../components/Parallax";
import Text from "../../components/Text";

const ID = 21;

export default function Luoghi(props) {
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
          <div className="content content__page">
            <div className="content__page__first content--full">
              <TitlePages
                title={page.title.rendered}
                img={img.guid.rendered}
                pathColor={page.acf.path_color}
              />
            </div>
            {page.acf.item &&
              page.acf.item.map((field) => {
                switch (field.component) {
                  case "Product":
                    return (
                      <Product
                        title={field.title}
                        text={field.description}
                        bgColor={field.bgcolor}
                      />
                    );
                    break;

                  case "Path":
                    return (
                      <Path
                        position={field.position}
                        title={field.title}
                        description={field.description}
                        link={field.link}
                        textLink={field.textLink}
                        image={field.bgimage.url}
                        pathColor={field.bgcolor}
                      />
                    );
                    break;
                  case "Buttons":
                    return <ButtonsProducts />;
                    break;
                  case "ParallaxProduct":
                    return (
                      <ParallaxProduct
                        height={field.height}
                        background={field.bgimage.url}
                      />
                    );
                    break;
                  case "Parallax":
                    return (
                      <Parallax
                        title={field.title}
                        height={field.height}
                        background={field.bgimage.url}
                      />
                    );
                    break;
                  case "Text":
                    return <Text text={field.text} position={field.position} />;
                    break;

                  default:
                    break;
                }
              })}
          </div>
        </React.Fragment>
      )}
    </TransitionPages>
  );
}
