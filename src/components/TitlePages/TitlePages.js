import React from "react";
import { decodeHtmlCharCodes } from "../../lib/decodeHtmlCharCodes";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./titlePages.scss";

export default function TitlePages(props) {
  checkHoverPersonalized();
  return (
    <div className="content__item content__item__first__right content--full-height">
      <div className="content__block__inner-page">
        <div className="text__intro">
          Quasi tutta tradizione con un pizzico di fantasia...
        </div>
      </div>
      <div className="content__item-imgwrap">
        <div
          className="content__item-img"
          style={{
            backgroundImage: "url(" + props.img + ")",
          }}
        ></div>
      </div>

      <div className="title__container">
        <h1 className="title">{decodeHtmlCharCodes(props.title)}</h1>
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
