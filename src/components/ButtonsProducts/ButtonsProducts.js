import React from "react";
import { NavLink } from "react-router-dom";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./buttonsProducts.scss";

export default function ButtonsProducts(props) {
  checkHoverPersonalized();
  return (
    <div className="buttons__products">
      <div className="button">
        <NavLink
          to="/vino"
          exact
          className="hover__dark"
          activeStyle={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
          }}
        >
          Vino
        </NavLink>
      </div>
      <div className="button">
        <NavLink
          to="/conserve"
          exact
          className="hover__dark"
          activeStyle={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
          }}
        >
          Conserve
        </NavLink>
      </div>
      <div className="button">
        <NavLink
          to="/frutta"
          exact
          className="hover__dark"
          activeStyle={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          Frutta
        </NavLink>
      </div>
      <div className="button">
        <NavLink
          to="/altro"
          exact
          className="hover__dark"
          activeStyle={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
          }}
        >
          Altro
        </NavLink>
      </div>
    </div>
  );
}
