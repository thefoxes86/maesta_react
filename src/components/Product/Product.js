import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./product.scss";

export default function Product(props) {
  checkHoverPersonalized();
  return (
    <div className="product__content">
      <div className="block__black"></div>
      <div className="title__block" style={{ backgroundColor: props.bgColor }}>
        <h3>{props.title}</h3>
        {props.pdf && (
          <a href={props.pdf} className="hover__light">
            Scheda tecnica
            <img src="img/icon_download.png" alt="" />
          </a>
        )}
      </div>
      <div className="text__content">{props.text}</div>
    </div>
  );
}
