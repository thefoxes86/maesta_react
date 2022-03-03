import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { blackBox } from "./blackBox";

export default function TransitionPages({ children, page, type }) {
  const location = useLocation();
  useEffect(() => {}, []);
  return (
    <React.Fragment>
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
