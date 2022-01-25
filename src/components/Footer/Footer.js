import React from "react";
import "./footer.scss";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import TransitionPages from "../../components/TransitionPages";
import { motion } from "framer-motion";
import { blackBox } from "../TransitionPages/blackBox";

export default function Footer(props) {
  checkHoverPersonalized();
  return (
    <TransitionPages>
      <motion.footer
        initial="footerInitial"
        animate="footerAnimate"
        variants={blackBox}
      >
        <div className="footer__logo">
          <img src="img/logo.png" alt="" />
        </div>
        <div className="info__footer">
          <p>
            Maestà della Formica società agricola ss - Via Taccino, 9 - 55030
            Careggine (LU) - PI e CF 02407330469
            <br />
            Copyright 2021 © Maestà della Formica - Informativa sulla Privacy &
            Cookie Policy <br />
            Credits: website design{" "}
            <a target="_blank" href="https://xdesigners.it">
              xdesigners.it
            </a>
            <br />
            photos header homepage,sapori della terra, vino, bio Pietro Guidugli
            - photos respiri della mente Lido Vannucchi e Sara Favilla
          </p>
        </div>
      </motion.footer>
    </TransitionPages>
  );
}
