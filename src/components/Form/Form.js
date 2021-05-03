import React from "react";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import "./form.scss";

export default function Form(props) {
  checkHoverPersonalized();
  return (
    <section className="contacts__grid__container">
      <div className="form">
        <h2 className="form__title">Scrivi</h2>
        <form>
          <label>
            Nome
            <input type="text" name="nome" />
          </label>
          <label>
            Mail
            <input type="text" name="mail" />
          </label>
          <label>
            Oggetto
            <input type="text" name="oggetto" />
          </label>
          <label>
            Messaggio
            <textarea name="messaggio" />
          </label>
          <input type="submit" value="Invia" className="hover__dark" />
        </form>
      </div>
      <div className="person1">
        <img src="img/volto_1.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pharetra hendrerit eleifend. Nullam ligula justo, ullamcorper sit amet
          ornare eget, accumsan vitae nunc. Aliquam semper, sem et vulputate
          dictum, nunc massa vehicula nunc, vitae finibus nulla erat nec risus.
          Cras arcu nisl, ullamcorper sed vestibulum vel, varius quis ex."
        </p>
      </div>
      <div className="person2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pharetra hendrerit eleifend. Nullam ligula justo, ullamcorper sit amet
          ornare eget, accumsan vitae nunc. Aliquam semper, sem et vulputate
          dictum, nunc massa vehicula nunc, vitae finibus nulla erat nec risus.
          Cras arcu nisl, ullamcorper sed vestibulum vel, varius quis ex."
        </p>
        <img src="img/volto_2.png" alt="" />
      </div>
      <div className="person3">
        <img src="img/volto_3.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pharetra hendrerit eleifend. Nullam ligula justo, ullamcorper sit amet
          ornare eget, accumsan vitae nunc. Aliquam semper, sem et vulputate
          dictum, nunc massa vehicula nunc, vitae finibus nulla erat nec risus.
          Cras arcu nisl, ullamcorper sed vestibulum vel, varius quis ex."
        </p>
      </div>
    </section>
  );
}
