import React, { useEffect } from "react";
import { initParallax } from "../../lib/initParallax";
import { checkHoverPersonalized } from "../../lib/cursorPerzonalize";
import ProductWithImage from "../ProductWithImage/ProductWithImage";
import "./parallaxProduct.scss";

export default function ParallaxProduct(props) {
  checkHoverPersonalized();
  useEffect(() => {
    initParallax();
    console.log("here");
  }, [props.background]);
  return (
    <React.Fragment>
      <section
        className="grid__container_background"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <ProductWithImage
          pathColor="#9faa7f"
          background="http://maestadellaformica.com/wp-content/uploads/2021/08/Vino_Gamo.png"
          title="GAMO"
          text="Accanto alla coltivazione del riesling abbiamo acquisito nel 2017 un altro terreno in Località Campo (circa 1 ha totali) in Garfagnana, a circa <strong>400 mt slm</strong>, dove, oltre ad un piccolo oliveto e molte piante da frutto, abbiamo <strong>una vigna di circa 40 anni di età a varietà mista,</strong> da cui nel 2018 abbiamo vendemmiato e vinificato un rosso, <strong>Gamo</strong> (13% Vol)."
          position="left"
        />

        <ProductWithImage
          pathColor="#c9593d"
          background="http://maestadellaformica.com/wp-content/uploads/2021/08/Vino_Drankante.png"
          title="DRAKANTE"
          text="Nel tempo l'attività di recupero dei vigneti antichi è proseguita nelle zone di Gallicano e Molazzana. Qui abbiamo rimesso in produzione filari impiantati 40 anni fa, producendo a partire dal 2019 il <strong>Drankante</strong> (11,5% Vol) un <strong>rosso frizzante IGT</strong> senza solfiti aggiunti, naturalmente biodinamico. Una spremuta di uva nel bicchiere, in produzione limitata a 1500 bottiglie nel 2019 e 2800 bottiglie nel 2020."
          position="right"
        />

        <ProductWithImage
          pathColor="#eb8c2c"
          background="http://maestadellaformica.com/wp-content/uploads/2021/08/Vino_Vignesperse.png"
          title="VIGNESPERSE"
          text="Dalla nostra voglia di rapportarci con il territorio in una logica di rispetto della biodiversità e di recupero dei terreni vitati, nel 2019 è nato <strong>Vignesperse</strong> (11,5% Vol), in produzione limitata a 1000 bottiglie. Un vino bianco fresco e sapido, dall'identità 'nomade', che riassume l'impronta territoriale di questa parte della Garfagnana. Viene infatti vinificato a partire da uve malvasia e trebbiano, con 'vigne sparse' all'interno di 4 amministrazioni comunali differenti. In località <strong>Cascio</strong> (Molazzana), <strong>Campo</strong> (Gallicano), <strong>Roccalberti</strong> (Camporgiano), <strong>Antisciana</strong> (Castelnuovo Garfagnana)."
          position="left"
        />

        <ProductWithImage
          pathColor="#c6b67b"
          background="http://maestadellaformica.com/wp-content/uploads/2021/08/Vino_Maestà-della-Formica.png"
          title="Maestà"
          text="Prodotto nei nostri vigneti alla <strong>Foce di Careggine</strong>, a 1050 mt s.l.m. a pochi km dalla costa, su terreni rocciosi famosi per il marmo bianco. Elevato sbalzo termico tra giorno e notte, il suolo e l'elevata altezza garantiscono una pronunciata mineralità, ma con influenze della flora mediterranea. Poco alcool, elevata acidità, grande sapidità, idrocarburi, pietra, lana bagnata e frutta matura sono alcune delle caratteristiche di questo vino."
          position="right"
        />
      </section>
    </React.Fragment>
  );
}
