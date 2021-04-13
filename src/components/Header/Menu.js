import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu(props) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="menu" onClick={() => setOpen(true)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="text__menu">MENU</span>
      </div>
      {open && (
        <nav className="container__menu" onClick={() => setOpen(false)}>
          <div className="row">
            <div className="col-md-6">
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </div>
            <div className="col-md-6">
              <NavLink to="/vini" activeClassName="active">
                Vini
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
}
