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
import Form from "../../components/Form";
import LayoutApp from "../../components/LayoutApp";
import PathPost from "../../components/PathPost";
import LazyLoad from "react-lazyload";
import PlaceholderImgComponent from "../../components/PlaceholderImgComponent";

const ID = 212;

export default function Comunicazioni(props) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [img, setImg] = useState();
  const [posts, setPosts] = useState([]);

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
        setPosts(resPosts);
        getScrollPage();
      });
    });

    return () => {};
  }, [loading]);

  return (
    <LayoutApp meta={page}>
      <TransitionPages>
        {!loading && (
          <React.Fragment>
            <div className="content content__page">
              <div className="content__page__first content--full">
                <TitlePages
                  title={page.title.rendered}
                  intro={page.acf.intro_page}
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

                    case "Path":
                      return (
                        <Path
                          position={field.position}
                          title={field.title}
                          text={field.text}
                          link={field.link}
                          textLink={field.textLink}
                          image={field.bgimage.url}
                          pathColor={field.bgcolor}
                        />
                      );

                    case "Buttons":
                      return <ButtonsProducts />;

                    case "ParallaxProduct":
                      return (
                        <ParallaxProduct
                          height={field.height}
                          background={field.bgimage.url}
                        />
                      );

                    case "Parallax":
                      return (
                        <Parallax
                          title={field.title}
                          height={field.height}
                          background={field.bgimage.url}
                        />
                      );

                    case "Text":
                      return (
                        <Text
                          text={field.text}
                          position={field.position}
                          showlogomountain={field.product_high_mountain}
                        />
                      );

                    case "Form":
                      return <Form text={field.text} />;

                    default:
                      break;
                  }
                })}

              {posts &&
                posts.map((post, index) => (
                  <PathPost
                    key={index}
                    position={index % 2 ? "left" : "right"}
                    title={post.title.rendered}
                    text={post.excerpt.rendered}
                    link={post.slug}
                    textLink={"Leggi tutto"}
                    image={post.featured_media}
                    date={post.date}
                  />
                ))}
            </div>
          </React.Fragment>
        )}
      </TransitionPages>
    </LayoutApp>
  );
}
