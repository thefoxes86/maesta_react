import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { state } from "./state";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./menu.scss";

export default function Menu(props) {
  const [open, setOpen] = useState(false);
  checkHoverPersonalized();
  useEffect(() => {
    const status = props.closeMenu ? false : true;
  }, [props.closeMenu]);
  return (
    <React.Fragment>
      <motion.div
        className={open ? "menu hover__light" : "menu hover__dark"}
        transition={state.transition}
        animate={open ? state.openMenu : state.closeMenu}
        onTap={() => {
          const status = open ? false : true;
          setOpen(status);
        }}
      >
        <div className="hamburger">
          <motion.span
            transition={state.transition}
            animate={open ? state.firstSpan.open : state.firstSpan.close}
          ></motion.span>
          <motion.span
            transition={state.transition}
            animate={open ? state.secondtSpan.open : state.secondtSpan.close}
          ></motion.span>
          <motion.span
            transition={state.transition}
            animate={open ? state.thirdSpan.open : state.thirdSpan.close}
          ></motion.span>
        </div>
        <motion.span
          className="text__menu"
          animate={open ? state.openMenuText : state.closeMenuText}
        >
          {open ? "MENU" : "MENU"}
        </motion.span>
      </motion.div>

      <motion.nav
        className="container__menu"
        animate={open ? state.openContainer : state.closeContainer}
        transition={state.transition}
      >
        <motion.ul
          animate={open ? state.opacityOn : state.opacityOff}
          transition={state.transitiondDelay}
        >
          <li>
            <NavLink
              to="/luoghi-del-racconto"
              className="hover__dark"
              activeClassName="active"
              type="category"
              onClick={() => {
                setOpen(false);
              }}
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
              onClick={() => {
                setOpen(false);
              }}
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
              onClick={() => {
                setOpen(false);
              }}
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
              onClick={() => {
                setOpen(false);
              }}
            >
              RESPIRI DELLA MENTE
            </NavLink>
          </li>
          <li></li>
          <li>
            <a
              href="https://www.instagram.com/maestadellaformica/"
              className="hover__dark"
            >
              <img width="25" src="img/instagram-icon.png" alt="" />
            </a>
          </li>
        </motion.ul>
      </motion.nav>
    </React.Fragment>
  );
}
