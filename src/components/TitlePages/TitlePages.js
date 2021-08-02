import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import { motion } from "framer-motion";
import { blackBox } from "../TransitionPages/blackBox";
import LazyLoad from "react-lazyload";
import PlaceholderImgComponent from "../PlaceholderImgComponent";
import "./titlePages.scss";

export default function TitlePages(props) {
  checkHoverPersonalized();
  return (
    <div className="content__item content__item__first__right content--full-height">
      <div className="content__block__inner-page">
        <div
          dangerouslySetInnerHTML={{ __html: props.intro }}
          className="text__intro"
        ></div>
      </div>
      <div className="content__item-imgwrap">
        <motion.img
          className="content__item-img"
          src={props.img}
          key={props.img}
          initial="imgInitial"
          animate="imgAnimate"
          variants={blackBox}
        ></motion.img>
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
    </div>
  );
}
