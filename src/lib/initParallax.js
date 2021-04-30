import simpleParallax from "simple-parallax-js";

const initParallax = () => {
  const images = [...document.querySelectorAll(".px__background__image")];
  images.forEach((el) => {
    new simpleParallax(el, {
      scale: 1.1,
    });
  });
};

export { initParallax };
