import React from "react";
import "./product.scss";

export default function Product(props) {
  return (
    <div className="product__content">
      <div className="block__black"></div>
      <div className="title__block" style={{ backgroundColor: props.bgColor }}>
        <h3>{props.title}</h3>
        <a href="">Scheda Tecnica</a>
      </div>
      <div className="text__content">{props.text}</div>
    </div>
  );
}
