import React, { useState } from "react";
import "./scroll_to_top.scss";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import { motion } from "framer-motion";
import { blackBox } from "../TransitionPages/blackBox";

export default function ScrollToTop(props) {
  const [scrollToTopIcon, setScrollToTopIcon] = useState(false);
  window.onscroll = () => {
    window.scrollY > 800 ? setScrollToTopIcon(true) : setScrollToTopIcon(false);
  };
  checkHoverPersonalized();

  return (
    <>
      {scrollToTopIcon && (
        <motion.div
          className="scroll__to_top"
          initial="scrollTopInitial"
          animate="scrollTopAnimate"
          variants={blackBox}
          onClick={() => window.scrollTo(0, 0)}
        >
          TOP
        </motion.div>
      )}
    </>
  );
}
