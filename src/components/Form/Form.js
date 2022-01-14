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
        <img src="img/volto_2.png" alt="" />
        <p>
          Classe 1979. Laureato in viticoltura ed enologia all'università di
          Pisa, ha iniziato la sua carriera a Castelnuovo Berardenga in Chianti,
          per poi proseguire a Capalbio, lavorando come enologo e direttore
          commerciale, dove rimane fino al 2012. Dal 2013 fonda con Marco, suo
          compagno di studi, Maestà della Formica, dopo essersi rincontrati in
          una serata particolarmente "allegra" a Verona durante un vinitaly. Qui
          si divide tra cantina, vigna cucina, amministrazione e
          commercializzazione dei prodotti.
        </p>
      </div>
      <div className="person2">
        <p>
          Classe 1979: Laureato in viticoltura ed enologia all'università di
          Pisa, da subito inizia a lavorare in lucchesia, con particolare
          predilezione per i lavori in vigna. E qui, oltre a qualche consulenza
          in toscana, si ferma fino ad oggi, raggiungendo in questi anni una
          grande conoscenza di questo territorio. E la vigna, la terra, i campi
          lo conquistano sempre di più diventando la grande passione della sua,
          vita, oltre all'agricoltura biodinamica, di cui si rivela uno dei
          pionieri in zona. È lui l'anima dell nostre vigne, curandole in modo
          maniacale e saltando senza sosta da una all'altra.
        </p>
        <img src="img/volto_3.png" alt="" />
      </div>
      <div className="person3">
        <img src="img/volto_1.png" alt="" />
        <p>
          Larissa, classe 1983: Prima di venire in Italia, per circa 10 anni ha
          lavorato con terapie della medicina indiana (Ayurveda) e in modo
          volontario come istruttrice di yoga in un carcere per minorenni a San
          Paolo. La voglia di studiare italiano (essendo discendente di
          italiani) e la passione per il vino l'hanno portata a Lucca, 3 anni
          fa, dove per mesi ho collaborato come “Wwoofer” in una azienda
          vinicola. Lì ha conosciuto e avuto contatto con altre aziende di
          luccabiodinamica e da qui è iniziata l'esperienza a Careggine, con
          Maestà della Formica. Nostra host al Rifugio Alpi Apuane, segue in
          prima persona coccolando e curando gli ospiti, oltre a rivelarsi un
          valido aiuto per tutti i lavori in vigna, cantina e laboratorio. "Il
          mangiare e bere bene e sano, il contatto con la natura, la calda
          accoglienza italiana e i borghi pittoreschi mi hanno facilmente
          convinto a scegliere l’Italia come mia nuova casa".
        </p>
      </div>
    </section>
  );
}
