import React from "react";
import "./footer.scss";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import TransitionPages from "../../components/TransitionPages";
import { motion } from "framer-motion";
import { blackBox } from "../TransitionPages/blackBox";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useLocation } from "react-router-dom";

const url =
  "https://maestadellaformica.us14.list-manage.com/subscribe/post?u=6a3342880d8eb33306d46b662&id=be57fe54bb";

export default function Footer(props) {
  let location = useLocation();

  console.log("Location", location.pathname.replace("/", ""));
  checkHoverPersonalized();
  return (
    <TransitionPages>
      <motion.footer
        initial="footerInitial"
        animate="footerAnimate"
        variants={blackBox}
      >
        <div className={`${location.pathname.replace("/", "")}`}>
          <div className={`footer__logo`}>
            <img src="img/logo.png" alt="" />
          </div>
          <div className="container_newsletter">
            <div className="text">
              <p>
                Per seguire tutte le novità sopra le nuvole iscriviti alla
                newsletter
              </p>
            </div>
            <div className="form">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <div>
                    <SimpleForm
                      onSubmitted={(formData) => subscribe(formData)}
                    />
                    {status === "sending" && (
                      <div style={{ color: "black" }}>sending...</div>
                    )}
                    {status === "error" && (
                      <div
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )}
                    {status === "success" && (
                      <div style={{ color: "green" }}>Subscribed !</div>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="info__footer">
            <p>
              Maestà della Formica società agricola ss - Via Taccino, 9 - 55030
              Careggine (LU) - PI e CF 02407330469
              <br />
              Copyright 2021 © Maestà della Formica - Informativa sulla Privacy
              & Cookie Policy <br />
              Credits: website design{" "}
              <a target="_blank" href="https://xdesigners.it">
                xdesigners.it
              </a>
              <br />
              photos header homepage,sapori della terra, vino, bio Pietro
              Guidugli - photos respiri della mente Lido Vannucchi e Sara
              Favilla
            </p>
          </div>
        </div>
      </motion.footer>
    </TransitionPages>
  );
}

const SimpleForm = () => <MailchimpSubscribe url={url} />;
