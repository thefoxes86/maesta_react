import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import { SRLWrapper } from "simple-react-lightbox";
import "./text.scss";
import { NavLink } from "react-router-dom";

export default function Text(props) {
  checkHoverPersonalized();
  const positionText = "content__text_" + props.position;
  return (
    <SRLWrapper>
      <div className={positionText}>
        <p
          dangerouslySetInnerHTML={{ __html: props.text }}
          className="text"
        ></p>

        <NavLink
          to="/parole-dal-mondo"
          exact
          className="hover__light continue back"
        >
          Torna agli articoli
        </NavLink>

        {props.showlogomountain === true && (
          <div className="float_image__container">
            <img src="img/prodotto_di_montagna.png" alt="" />
          </div>
        )}
      </div>
    </SRLWrapper>
  );
}
