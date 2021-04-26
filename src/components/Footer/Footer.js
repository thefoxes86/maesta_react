import react from "react";
import "./footer.scss";

export default function Footer(props) {
  return (
    <footer>
      <div className="footer__logo">
        <img src="img/logo.png" alt="" />
      </div>
      <div className="info__footer">
        <p>
          Maestà della Formica società agricola ss - Via Taccino, 9 - 55030
          Careggine (LU) - PI e CF 02407330469
        </p>
        <p>
          Copyright 2021 © Maestà della Formica - Informativa sulla Privacy &
          Cookie Policy - Credits xdesigners.it
        </p>
      </div>
    </footer>
  );
}
