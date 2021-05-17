import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";
import "./header.scss";
import {
  cursorPersonalize,
  checkHoverPersonalized,
} from "../../lib/cursorPerzonalize";
import HTML2React from "html2react";

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
          {HTML2React(meta.yoast_head)}
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
