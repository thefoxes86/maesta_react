import React from "react";
export default function Parallax(props) {
  return (
    <section
      className="parallax__container grid__container_wine"
      style={{ minHeight: props.height }}
    >
      <div className="background">
        <img
          className="px__background__image"
          src="img/texture__muro.png"
          alt=""
        />
      </div>

      <div className="grid__container_pruduct grid__container_pruduct_left">
        <div className="title">
          <h3>Titolo</h3>
        </div>
        <div className="image">
          <img src="img/wine_bottle.png" alt="" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
          ligula quis lorem porttitor, in varius dolor hendrerit. Phasellus
          hendrerit enim id augue porttitor, sit amet sodales magna rutrum.
          Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra tempor
          egestas.
        </div>
      </div>
      <div className="grid__container_pruduct grid__container_pruduct_right">
        <div className="title">
          <h3>Titolo</h3>
        </div>
        <div className="image">
          <img src="img/wine_bottle.png" alt="" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
          ligula quis lorem porttitor, in varius dolor hendrerit. Phasellus
          hendrerit enim id augue porttitor, sit amet sodales magna rutrum.
          Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra tempor
          egestas.
        </div>
      </div>
      <div className="grid__container_pruduct grid__container_pruduct_left">
        <div className="title">
          <h3>Titolo</h3>
        </div>
        <div className="image">
          <img src="img/wine_bottle.png" alt="" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
          ligula quis lorem porttitor, in varius dolor hendrerit. Phasellus
          hendrerit enim id augue porttitor, sit amet sodales magna rutrum.
          Quisque eleifend rhoncus nisl vitae dignissim. Duis pharetra tempor
          egestas.
        </div>
      </div>
    </section>
  );
}
