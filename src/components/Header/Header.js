import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";
import "./header.scss";
import { cursorPersonalize } from "../../lib/cursorPerzonalize";

export default function Header(props) {
  const [closeMenu, setCloseMenu] = useState(false);
  cursorPersonalize();
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <title>{props.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="logo hover__light">
        <NavLink to="/" exact onClick={() => setCloseMenu(true)}>
          <img src="img/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="cursor"></div>
      <Menu closeMenu={closeMenu} />
    </React.Fragment>
  );
}
