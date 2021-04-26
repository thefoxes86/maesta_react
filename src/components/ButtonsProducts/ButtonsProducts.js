import React from "react";
import { NavLink } from "react-router-dom";
import "./buttonsProducts.scss";

export default function ButtonsProducts(props) {
  return (
    <div className="buttons__products">
      <div className="button">
        <NavLink to="/vini" exact className="hover__dark">
          Vini
        </NavLink>
      </div>
      <div className="button">
        <NavLink to="/olio" exact className="hover__dark">
          Olio
        </NavLink>
      </div>
      <div className="button">
        <NavLink to="/conserve" exact className="hover__dark">
          Conserve
        </NavLink>
      </div>{" "}
      <div className="button">
        <NavLink to="/selvatico" exact className="hover__dark">
          Selvatico
        </NavLink>
      </div>
      <div className="button">
        <NavLink to="/frutta" exact className="hover__dark">
          Frutta
        </NavLink>
      </div>
    </div>
  );
}
