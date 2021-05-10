import React, { useEffect } from "react";
import FetchApi from "../../lib/fetchApi";
import TransitionPages from "../../components/TransitionPages";
import "../../assets/js/scrollingImagesEffect";
import ParallaxProduct from "../../components/ParallaxProduct";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";
import Parallax from "../../components/Parallax";
import { motion } from "framer-motion";
import ButtonsProducts from "../../components/ButtonsProducts";
import Path from "../../components/Path";

export default function Home(props) {
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

  getScrollPage();

  return (
    <React.Fragment>
      <TransitionPages>
        <div className="content content__first content--full">
          <div className="content__item content__item__first__right content--full-height">
            <div className="content__block__inner-page">
              <div className="text__intro">
                Quasi tutta tradizione con un pizzico di fantasia...
              </div>
              <motion.img src="img/circle_home_top.png" />
            </div>
            <div className="content__item-imgwrap">
              <div
                className="content__item-img"
                style={{
                  backgroundImage: `url(img/img__0.png)`,
                }}
              ></div>
            </div>

            <div className="content__item-path">
              <svg
                id="path__0"
                data-name="path__0"
                xmlns="http://www.w3.org/2000/svg"
                width="1091.5"
                height="754.375"
                viewBox="0 0 1091.5 754.375"
              >
                <path
                  id="track__1"
                  data-name="track__1"
                  d="M0,0,1091.5,92.375v662L0,662Z"
                  fill="#252526"
                />
              </svg>
            </div>
          </div>
          <Path
            position="left"
            title="Luoghi del racconto"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis eros eget blandit hendrerit. Aenean varius nisl id mattis
          consectetur. Curabitur a vulputate nulla. Donec ex quam, finibus quis
          nunc a, efficitur tincidunt erat. Duis porttitor sagittis sem nec
          semper."
            link="/luoghi-del-racconto"
            textLink="continua"
            image="img/img__1.png"
            pathColor="#eb8c2c"
          />

          <Path
            position="right"
            title="Sapori della Terra"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis eros eget blandit hendrerit. Aenean varius nisl id mattis
          consectetur. Curabitur a vulputate nulla. Donec ex quam, finibus quis
          nunc a, efficitur tincidunt erat. Duis porttitor sagittis sem nec
          semper."
            link="/sapori-della-terra"
            textLink="continua"
            image="img/img__2.png"
            pathColor="#e3672a"
          />

          <ParallaxProduct height="100vh" background="img/texture__muro.png" />

          <ButtonsProducts />

          <Parallax height="70vh" background="img/clouds.png" />

          <Path
            position="left"
            title="Respiri della mente"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sagittis eros eget blandit hendrerit. Aenean varius nisl id mattis
          consectetur. Curabitur a vulputate nulla. Donec ex quam, finibus quis
          nunc a, efficitur tincidunt erat. Duis porttitor sagittis sem nec
          semper."
            link="/respiri-della-mente"
            textLink="continua"
            image="img/img__3.png"
            pathColor="#d44d2b"
          />
        </div>
      </TransitionPages>
    </React.Fragment>
  );
}
