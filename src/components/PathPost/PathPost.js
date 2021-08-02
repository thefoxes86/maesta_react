import React from "react";
import { NavLink } from "react-router-dom";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import LazyLoad from "react-lazyload";
import PlaceholderImgComponent from "../PlaceholderImgComponent";
import { motion } from "framer-motion";
import { blackBox } from "../../components/TransitionPages/blackBox";
import "./pathPost.scss";

export default function PathPost(props) {
  checkHoverPersonalized();
  const classPosition = "content__item content__item__" + props.position;
  const colors = [
    "#D9000D",
    "#9FAA7F",
    "#E5D2A9",
    "#9F431A",
    "#47574D",
    "#AC8830",
    "#6E4632",
    "#E3672A",
    "#A11C2F",
    "#F4B628",
    "#8F050C",
    "#B2DA60",
  ];

  const getRandomColor = () => {
    console.log("numero ");
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className={classPosition}>
      {props.title && (
        <span className="content__item-text">
          {props.title && (
            <div className="title_post">
              <h3>{props.title}</h3>
            </div>
          )}
          {props.text && (
            <p
              dangerouslySetInnerHTML={{ __html: props.text }}
              className="description"
            ></p>
          )}
          {props.link && (
            <NavLink to={props.link} exact className="continue hover__light">
              {props.textLink}
            </NavLink>
          )}
        </span>
      )}

      <div className="content__item-imgwrap">
        <motion.img
          className="content__item-img"
          src={props.image && props.image}
          key={props.image}
          initial="imgInitial"
          animate="imgAnimate"
          variants={blackBox}
        ></motion.img>
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
            fill={getRandomColor()}
          />
        </svg>
      </div>
    </div>
  );
}
