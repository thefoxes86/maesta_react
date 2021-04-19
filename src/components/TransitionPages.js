import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function TransitionPages({ children, location, page }) {
  const history = useHistory();
  const blackBox = {
    initial: {
      height: "100vh",
      top: 0,
    },
    exit: {
      height: "100vh",
      top: 0,
    },
    initialOut: {
      height: "100vh",
      top: 0,
      opacity: 0,
    },
    animate: {
      height: 0,
      top: "100vh",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    animate2: {
      opacity: 0,
      top: 0,
      height: 0,
    },
    animate3: {
      opacity: 1,
    },
    animateOut: {
      height: "100vh",
      top: 0,
      transition: {
        duration: 1,
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
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const allLinks = [...document.querySelectorAll("a")];
  const controls = useAnimation();

  allLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const finalPath = e.path[0].pathname.substring(
        1,
        e.path[0].pathname.length
      );
      controls.start(blackBox.animateOut).then(() => {
        controls.start(blackBox.pageZoomExit);
        history.push(finalPath);
      });
    });
  });
  controls.start(blackBox.animate).then(() => {
    controls.start(blackBox.animate2).then(() => {
      controls.start(blackBox.animate3);
    });
  });

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          key="pageBox"
          variants={blackBox}
          initial={blackBox.initial}
          animate={controls}
        >
          <motion.svg className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect className="w-full h-full text-gray-600 fill-current" />
            </pattern>
            <text
              className="text-4xl font-bold"
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
              maesta della formica
            </text>
          </motion.svg>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={children}
          variants={blackBox}
          initial={blackBox.pageZoomInitial}
          animate={blackBox.pageZoomAnimate}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
}
