import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function Header(props) {
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

      <nav>
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
    </React.Fragment>
  );
}
