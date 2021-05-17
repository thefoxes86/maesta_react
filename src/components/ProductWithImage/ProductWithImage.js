import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./productwithimage.scss";

export default function ProductWithImage(props) {
  const classPosition =
    "productWithImage__content productWithImage__content_" + props.position;
  return (
    <div className={classPosition}>
      <div className="block__black">
        <h3>{props.title}</h3>
      </div>
      <div
        className="content__block"
        style={{ backgroundColor: props.pathColor }}
      >
        {props.position === "right" && (
          <a href={props.pdf} className="hover__light">
            Scheda tecnica
            <img src="img/icon_download.png" alt="" />
          </a>
        )}
        <img
          src={props.background}
          alt={props.title}
          className="img__content"
        />
        <div
          className="text__content"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></div>
        {props.position === "left" && (
          <a href={props.pdf} className="hover__light">
            Scheda tecnica
            <img src="img/icon_download.png" alt="" />
          </a>
        )}
      </div>
    </div>
  );
}
