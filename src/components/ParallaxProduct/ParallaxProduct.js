import React, { useEffect } from "react";
import { initParallax } from "../../lib/initParallax";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./parallaxProduct.scss";

export default function ParallaxProduct(props) {
  checkHoverPersonalized();
  useEffect(() => {
    initParallax();
    console.log("here");
  }, [props.background]);
  return (
    <React.Fragment>
      <section
        className="parallax__container grid__container_wine"
        style={{ minHeight: props.height }}
      >
        <div className="background">
          <img
            className="px__background__image"
            src={props.background}
            alt=""
          />
        </div>

        <div className="grid__container_pruduct grid__container_pruduct_left">
          <div className="title">
            <h3>Gamo</h3>
          </div>
          <div className="image">
            <img src="img/wine_bottle.png" alt="" />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sagittis ligula quis lorem porttitor, in varius dolor hendrerit.
            Phasellus hendrerit enim id augue porttitor, sit amet sodales magna
            rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra
            tempor egestas.
          </div>
        </div>
        <div className="grid__container_pruduct grid__container_pruduct_right">
          <div className="title">
            <h3>Drakante</h3>
          </div>
          <div className="image">
            <img src="img/wine_bottle.png" alt="" />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sagittis ligula quis lorem porttitor, in varius dolor hendrerit.
            Phasellus hendrerit enim id augue porttitor, sit amet sodales magna
            rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra
            tempor egestas.
          </div>
        </div>
        <div className="grid__container_pruduct grid__container_pruduct_left">
          <div className="title">
            <h3>Gamo</h3>
          </div>
          <div className="image">
            <img src="img/wine_bottle.png" alt="" />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sagittis ligula quis lorem porttitor, in varius dolor hendrerit.
            Phasellus hendrerit enim id augue porttitor, sit amet sodales magna
            rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra
            tempor egestas.
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
