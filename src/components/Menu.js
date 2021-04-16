import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu(props) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="menu hover__light" onClick={() => setOpen(true)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="text__menu">MENU</span>
      </div>
      {open && (
        <nav className="container__menu" onClick={() => setOpen(false)}>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/vini" activeClassName="active">
                Vini
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
}
