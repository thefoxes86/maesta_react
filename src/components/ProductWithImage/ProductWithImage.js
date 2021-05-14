import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./productwithimage.scss";

export default function ProductWithImage(props) {
  return (
    <div className="productWithImage__content">
      <div className="block__black">
        <h3>{props.title}</h3>
      </div>
      <div
        className="content__block"
        style={{ backgroundColor: props.pathColor }}
      >
        <div
          className="img__content"
          style={{
            backgroundImage: `url(${props.background})`,
          }}
        ></div>
        <div
          className="text__content"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></div>

        <a href={props.pdf} className="hover__light">
          Scheda tecnica
          <img src="img/icon_download.png" alt="" />
        </a>
      </div>
    </div>
  );
}
