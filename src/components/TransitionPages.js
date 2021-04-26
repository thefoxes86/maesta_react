import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

import { blackBox } from "../lib/blackBox";

export default function TransitionPages({ children, page, type }) {
  const location = useLocation();
  return (
    <React.Fragment>
      {/* <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        exit="initial"
        variants={blackBox}
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
      </motion.div> */}

      <motion.div
        key={location.pathname}
        initial="pageZoomInitial"
        animate="pageZoomAnimate"
        exit="pageZoomExit"
        variants={blackBox}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}
