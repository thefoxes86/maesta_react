import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <nav>
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
    </React.Fragment>
  );
}
