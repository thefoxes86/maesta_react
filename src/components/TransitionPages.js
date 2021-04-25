import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";

import { blackBox } from "../lib/blackBox";

export default function TransitionPages({ children, location, page, type }) {
  const history = useHistory();

  const allLinks = [...document.querySelectorAll("a")];
  const controls = useAnimation();

  console.log("ernto cia");
  allLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("1");

      const finalPath =
        e.path[0].pathname !== undefined
          ? e.path[0].pathname.substring(1, e.path[0].pathname.length)
          : "/";
      controls.start(blackBox.animateOut).then(() => {
        history.push(finalPath);
      });
    });
  });
  console.log("3");
  controls.start(blackBox.animate).then(() => {
    console.log("4");
    controls.start(blackBox.animate2).then(() => {
      console.log("5");
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
          // variants={blackBox}
          // initial={blackBox.pageZoomInitial}
          // animate={blackBox.pageZoomAnimate}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
}
