import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./productwithimage.scss";

export default function ProductWithImage(props) {
  return (
    <div className="grid__container_pruduct grid__container_pruduct_left">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="image">
        <img src="img/wine_bottle.png" alt="" />
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
        ligula quis lorem porttitor, in varius dolor hendrerit. Phasellus
        hendrerit enim id augue porttitor, sit amet sodales magna rutrum.
        Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra tempor
        egestas.
      </div>
    </div>
  );
}
