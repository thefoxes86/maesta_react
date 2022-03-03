import React, { useState } from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { blackBox } from "../TransitionPages/blackBox";
import "./titlePagesWithProducts.scss";

export default function TitlePagesWithProducts(props) {
  checkHoverPersonalized();
  const [bgImg, setBgImg] = useState(props.imgVino.url);
  const handleBgImage = (img) => {
    setBgImg(img);
  };

  return (
    <div className="content__item content__item__first__right content--full-height">
      <div className="content__block__inner-page">
        <div
          dangerouslySetInnerHTML={{ __html: props.intro }}
          className="text__intro"
        ></div>
      </div>
      <div className="content__item-imgwrap">
        {props.imgVino ? (
          <motion.img
            className="content__item-img"
            src={bgImg}
            key={bgImg}
            initial="imgInitial"
            animate="imgAnimate"
            variants={blackBox}
          ></motion.img>
        ) : (
          <motion.img
            className="content__item-img"
            src={props.img}
            key={props.img}
            initial="imgInitial"
            animate="imgAnimate"
            variants={blackBox}
          ></motion.img>
        )}
      </div>

      <div className="title__container">
        <h1
          dangerouslySetInnerHTML={{ __html: props.title }}
          className="title"
        ></h1>
      </div>
      <div className="content__item-path">
        {props.pathColor && (
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
              fill={props.pathColor}
            />
          </svg>
        )}
      </div>

      <div className="buttons__products__header">
        <div className="button">
          <NavLink
            to="/vino"
            exact
            className="hover__dark"
            onMouseOver={() => handleBgImage(props.imgVino.url)}
          >
            Vino
          </NavLink>
        </div>
        <div className="button">
          <NavLink
            to="/conserve"
            exact
            className="hover__dark"
            onMouseOver={() => handleBgImage(props.imgConserve.url)}
          >
            Conserve
          </NavLink>
        </div>
        <div className="button">
          <NavLink
            to="/frutta"
            exact
            className="hover__dark"
            onMouseOver={() => handleBgImage(props.imgFrutta.url)}
          >
            Frutta
          </NavLink>
        </div>
        <div className="button">
          <NavLink
            to="/altro"
            exact
            className="hover__dark"
            onMouseOver={() => handleBgImage(props.imgAltro.url)}
          >
            Altro
          </NavLink>
        </div>
      </div>
    </div>
  );
}
