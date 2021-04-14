import React from "react";
import { Helmet } from "react-helmet";
import Menu from "./Menu";
import { set } from "animejs";

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
        <img src="img/logo.png" alt="" />
      </div>
      <div className="cursor"></div>
      <Menu />
    </React.Fragment>
  );
}

const cursorPersonalize = () => {
  const cursor = document.querySelector(".cursor");
  const hoverLight = [...document.querySelectorAll(".hover__light")];

  cursor &&
    document.addEventListener("mousemove", (e) => {
      // if (e.pageX < 0 || e.pageX > window.innerWidth) {

      // }
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
    element.addEventListener("mouseover", () => cursor.classList.add("hover"));
    element.addEventListener("mouseout", () =>
      cursor.classList.remove("hover")
    );
  });
};
