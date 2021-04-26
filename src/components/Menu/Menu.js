import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./menu.scss";

export default function Menu(props) {
  const [open, setOpen] = useState(false);
  const variants = {
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
  return (
    <React.Fragment>
      <motion.div
        className={open ? "menu hover__light" : "menu hover__dark"}
        transition={variants.transition}
        animate={open ? variants.openMenu : variants.closeMenu}
        onTap={() => {
          const status = open ? false : true;
          setOpen(status);
        }}
      >
        <div className="hamburger">
          <motion.span
            transition={variants.transition}
            animate={open ? variants.firstSpan.open : variants.firstSpan.close}
          ></motion.span>
          <motion.span
            transition={variants.transition}
            animate={
              open ? variants.secondtSpan.open : variants.secondtSpan.close
            }
          ></motion.span>
          <motion.span
            transition={variants.transition}
            animate={open ? variants.thirdSpan.open : variants.thirdSpan.close}
          ></motion.span>
        </div>
        <motion.span
          className="text__menu"
          animate={open ? variants.openMenuText : variants.closeMenuText}
        >
          {open ? "MENU" : "MENU"}
        </motion.span>
      </motion.div>

      <motion.nav
        className="container__menu"
        animate={open ? variants.openContainer : variants.closeContainer}
        transition={variants.transition}
      >
        <motion.ul
          animate={open ? variants.opacityOn : variants.opacityOff}
          transition={variants.transitiondDelay}
        >
          <li>
            <NavLink
              to="/luoghi-del-racconto"
              className="hover__dark"
              activeClassName="active"
              type="category"
            >
              LUOGHI DEL RACCONTO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sapori-della-terra"
              className="hover__dark"
              activeClassName="active"
              type="category"
            >
              SAPORI DELLA TERRA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volti-dell-altipiano"
              className="hover__dark"
              activeClassName="active"
              type="category"
            >
              VOLTI DELL'ALTIPIANO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/respiri-della-mente"
              className="hover__dark"
              activeClassName="active"
              type="category"
            >
              RESPIRI DELLA MENTE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contatti"
              className="hover__dark"
              activeClassName="active"
              type="page"
            >
              CONTATTI
            </NavLink>
          </li>
          <li>INSTAGRAM ICON</li>
        </motion.ul>
      </motion.nav>
    </React.Fragment>
  );
}
