import React from "react";
import FetchApi from "../../lib/fetchApi";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { getScrollPage } from "../../assets/js/scrollingImagesEffect";

import TransitionPages from "../../components/TransitionPages";

export default function Respiri(props) {
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
  console.log(posts);

  getScrollPage();
  return (
    <React.Fragment>
      <Header title={props.cat} />
      <Menu />

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

        <div className="content__item content__item__left">
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(img/img__1.png)`,
              }}
            ></div>
          </div>

          <div className="content__item-path">
            <svg
              id="path__1"
              data-name="path__1"
              xmlns="http://www.w3.org/2000/svg"
              width="885.398"
              height="611.931"
              viewBox="0 0 885.398 611.931"
            >
              <g id="path__1" data-name="path__1">
                <path
                  id="track__1"
                  data-name="track__1"
                  d="M885.4,611.931,0,537V0L885.4,74.932Z"
                  transform="translate(0 0)"
                  fill="#eb8c2c"
                />
              </g>
            </svg>
          </div>
          <span className="content__item-text">
            <div className="title">
              <h3>Luoghi del racconto</h3>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis eros eget blandit hendrerit. Aenean varius
              nisl id mattis consectetur. Curabitur a vulputate nulla. Donec ex
              quam, finibus quis nunc a, efficitur tincidunt erat. Duis
              porttitor sagittis sem nec semper.
            </p>
            <NavLink to="/luoghi-del-racconto" className="continue">
              Continua
            </NavLink>
          </span>
        </div>

        <div className="content__item content__item__right">
          <span className="content__item-text">
            <div className="title">
              <h3>Testo di prova</h3>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis eros eget blandit hendrerit. Aenean varius
              nisl id mattis consectetur. Curabitur a vulputate nulla. Donec ex
              quam, finibus quis nunc a, efficitur tincidunt erat. Duis
              porttitor sagittis sem nec semper.
            </p>
            <NavLink to="/" exact className="continue">
              Continua
            </NavLink>
          </span>

          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(img/img__2.png)`,
              }}
            ></div>
          </div>

          <div className="content__item-path">
            <svg
              id="path__2"
              data-name="path__2"
              xmlns="http://www.w3.org/2000/svg"
              width="885.398"
              height="611.931"
              viewBox="0 0 885.398 611.931"
            >
              <path
                id="track__2"
                data-name="track__2"
                d="M0,0,885.4,74.932v537L0,537Z"
                fill="#e3672a"
              />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
