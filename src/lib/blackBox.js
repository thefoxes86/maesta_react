const blackBox = {
  initial: {
    height: "100vh",
    top: 0,
  },
  exit: {
    height: "100vh",
    top: 0,
  },
  animate: {
    height: 0,
    top: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  pageZoomInitial: {
    opacity: 0,
    transform: "scale(1.05)",
  },
  pageZoomExit: {
    transform: "scale(0.95)",
    opacity: 0,
  },
  pageZoomAnimate: {
    transform: "scale(1.0)",
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export { blackBox };
