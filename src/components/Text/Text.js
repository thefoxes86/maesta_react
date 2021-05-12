import React from "react";
import { strRemoveTagElement } from "../../lib/strRemoveTagElement";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./text.scss";

export default function Text(props) {
  checkHoverPersonalized();
  const positionText = "content__text_" + props.position;
  return (
    <div className={positionText}>
      <p dangerouslySetInnerHTML={{ __html: props.text }} className="text"></p>
    </div>
  );
}
