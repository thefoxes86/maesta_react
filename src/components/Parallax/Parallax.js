import React from "react";
import { NavLink } from "react-router-dom";
import "./parallax.scss";
export default function Parallax(props) {
  if (props.content === "product") {
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
              Phasellus hendrerit enim id augue porttitor, sit amet sodales
              magna rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis
              pharetra tempor egestas.
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
              Phasellus hendrerit enim id augue porttitor, sit amet sodales
              magna rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis
              pharetra tempor egestas.
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
              Phasellus hendrerit enim id augue porttitor, sit amet sodales
              magna rutrum. Quisque eleifend rhoncus nisl vitae dignissim. Duis
              pharetra tempor egestas.
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  } else if (props.content === "text") {
    return (
      <React.Fragment>
        <section
          className="parallax__container parrallax_circle grid__container_wine"
          style={{ minHeight: props.height }}
        >
          <div className="background">
            <img
              className="px__background__image"
              src={props.background}
              alt=""
            />
            <div className="content__item__parallax__right">
              <div className="content__item__parallax-text">
                <div className="title">
                  <h3>VOLTI DELL’altipiano</h3>
                </div>
                <p className="description">
                  <p>
                    Parola d’ordine <strong>Qualità</strong>,
                  </p>
                  <p>
                    ottenuta tramite il rispetto della natura e il desiderio di
                    esserle solamente d’aiuto nello svolgere al meglio il suo
                    corso,
                  </p>
                  <p>
                    certi che sia questo a fare la differenza tra un buon
                    prodotto ed
                    <strong> un grande prodotto</strong>.
                  </p>
                </p>
                <NavLink to="/scrivi" exact className="continue hover__light">
                  Scrivi...
                </NavLink>
              </div>
            </div>
          </div>
          <div className="circle__black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1451"
              height="1451"
              viewBox="0 0 1451 1451"
            >
              <g
                id="Ellisse_1"
                data-name="Ellisse 1"
                fill="none"
                stroke="#000"
                stroke-width="2"
              >
                <circle cx="725.5" cy="725.5" r="725.5" stroke="none" />
                <circle cx="725.5" cy="725.5" r="724.5" fill="none" />
              </g>
            </svg>
            <div className="volti__container">
              <div className="volti">
                <img src="img/volto_1.png" alt="" />
              </div>
              <div className="volti">
                <img src="img/volto_2.png" alt="" />
              </div>
              <div className="volti">
                <img src="img/volto_3.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  } else {
    return;
  }
}
