const state = {
  openContainer: { left: "0" },
  closeContainer: { opacity: 0, left: "-50vw" },
  opacityOff: {
    display: "none",
  },
  opacityOn: {
    display: "block",
  },
  openMenu: {
    backgroundColor: "rgb(255,255,255)",
  },
  openMenuText: {
    color: "rgb(0,0,0)",
  },
  closeMenu: {
    backgroundColor: "rgb(0,0,0)",
  },
  closeMenuText: {
    color: "rgb(255,255,255)",
  },
  firstSpan: {
    open: {
      backgroundColor: "rgb(0,0,0)",
      transform: "rotate(45deg) translateX(5px) translateY(10px)",
    },
    close: {},
  },
  secondtSpan: {
    open: {
      opacity: 0,
      left: "-15px",
      backgroundColor: "black",
    },
    close: {},
  },
  thirdSpan: {
    open: {
      backgroundColor: "black",
      width: "100%",
      transform: "rotate(-45deg) translateX(5px) translateY(-10px)",
    },
    close: {},
  },
  transition: {
    duration: 1.5,
    ease: [0.87, 0, 0.13, 1],
  },
  transitiondDelay: {
    delay: 1.5,
    duration: 0.2,
    ease: [0.87, 0, 0.13, 1],
  },
};

export { state };
