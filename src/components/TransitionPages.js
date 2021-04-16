import React from "react";
import { motion } from "framer-motion";

export default function TransitionPages({ children, location }) {
  const blackBox = {
    initial: {
      height: "100vh",
      top: 0,
    },
    exit: {
      height: "100vh",
      top: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
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
      transform: "scale(1.1)",
    },
    pageZoomAnimate: {
      transform: "scale(1)",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <React.Fragment>
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        variants={blackBox}
        initial="initial"
        animate="animate"
        exit="exit"
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
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            maesta della formica
          </text>
        </motion.svg>
      </motion.div>
      <motion.div
        variants={blackBox}
        initial="pageZoomInitial"
        exit="exit"
        animate="pageZoomAnimate"
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}
