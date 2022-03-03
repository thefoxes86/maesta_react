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
    transition: {
      delay: 1,
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  pageZoomAnimate: {
    transform: "scale(1.0)",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  imgInitial: {
    transform: "scale(1.2)",
    opacity: 0,
  },
  imgAnimate: {
    transform: "scale(1.0)",
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.3,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  footerInitial: {
    opacity: 0,
  },
  footerAnimate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  scrollTopInitial: {
    opacity: 0,
  },
  scrollTopAnimate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export { blackBox };
