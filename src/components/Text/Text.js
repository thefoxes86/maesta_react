import React from "react";

import "./text.scss";

export default function Text(props) {
  const positionText = "content__text_" + props.position;
  return (
    <div className={positionText}>
      <p className="text">{props.text}</p>
    </div>
  );
}
