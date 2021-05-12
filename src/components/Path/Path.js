import React from "react";
import { NavLink } from "react-router-dom";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./path.scss";

export default function Path(props) {
  checkHoverPersonalized();
  const classPosition = "content__item content__item__" + props.position;
  return (
    <div className={classPosition}>
      {props.title && (
        <span className="content__item-text">
          {props.title && (
            <div className="title">
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
        <div
          className="content__item-img"
          style={{
            backgroundImage: `url('${props.image}')`,
          }}
        ></div>
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
            fill={props.pathColor}
          />
        </svg>
      </div>
    </div>
  );
}
