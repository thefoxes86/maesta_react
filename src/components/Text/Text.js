import React from "react";
import { strRemoveTagElement } from "../../lib/strRemoveTagElement";

import "./text.scss";

export default function Text(props) {
  const positionText = "content__text_" + props.position;
  return (
    <div className={positionText}>
      <p className="text">{strRemoveTagElement(props.text)}</p>
    </div>
  );
}
