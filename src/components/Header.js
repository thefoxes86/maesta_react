import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

export default function Header(props) {
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
        <NavLink to="/" exact>
          <img src="img/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="cursor"></div>
      <Menu />
    </React.Fragment>
  );
}

const cursorPersonalize = () => {
  const cursor = document.querySelector(".cursor");
  const hoverLight = [...document.querySelectorAll(".hover__light")];
  const hoverDark = [...document.querySelectorAll(".hover__dark")];

  cursor &&
    document.addEventListener("mousemove", (e) => {
      if (
        e.pageX < 5 ||
        e.pageX > window.innerWidth - 5 ||
        e.pageY < 5 ||
        e.pageY > window.innerHeight - 5
      ) {
      }
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
      );
    });

  // document.addEventListener("click", () => {
  //   cursor && cursor.classList.add("expand");

  //   setTimeout(() => {
  //     cursor.classList.remove("expand");
  //   }, 500);
  // });
  hoverLight.forEach((element) => {
    element.addEventListener("mouseover", () =>
      cursor.classList.add("hover_black")
    );
    element.addEventListener("mouseout", () =>
      cursor.classList.remove("hover_black")
    );
  });
  hoverDark.forEach((element) => {
    element.addEventListener("mouseover", () =>
      cursor.classList.add("hover_white")
    );
    element.addEventListener("mouseout", () =>
      cursor.classList.remove("hover_white")
    );
  });
};
