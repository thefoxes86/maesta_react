import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";
import "./header.scss";
import {
  cursorPersonalize,
  checkHoverPersonalized,
} from "../../lib/cursorPerzonalize";

export default function Header({ meta }) {
  const [closeMenu, setCloseMenu] = useState(false);

  useEffect(() => {
    checkHoverPersonalized();
    cursorPersonalize();
  }, []);
  return (
    <React.Fragment>
      {meta && (
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="" />
          <title>{meta.title.rendered}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      )}
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
