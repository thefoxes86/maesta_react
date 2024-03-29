import React, { useEffect } from 'react'
import { initParallax } from '../../lib/initParallax'
import { checkHoverPersonalized } from '../../lib/cursorPerzonalize'
import ProductWithImage from '../ProductWithImage/ProductWithImage'
import './parallaxProduct.scss'
import { pathBackend } from '../../lib/pathBackend'
import { NavLink } from 'react-router-dom'

export default function ParallaxProduct(props) {
  checkHoverPersonalized()
  useEffect(() => {
    initParallax()
  }, [props.background])
  return (
    <React.Fragment>
      <section
        className="grid__container_background"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <ProductWithImage
          pathColor="#9faa7f"
          background={`${pathBackend}/wp-content/uploads/2023/10/Gamo_2022.png`}
          title="GAMO"
          text=" 
          <strong>Gamo</strong> è il primo dei vini qui prodotto. In un’area dove non esistono legami a varietà precise o denominazioni storiche, l’uva è sempre stata coltivata in vigneti antichi tramandati di generazione in generazione. Ed è proprio questo passaggio generazionale, dove ognuno ha aggiunto qualcosa di suo, che gli ha plasmati donandogli una forma unica e diversa da tutti i suoi vicini. Ogni vigneto diventa una sorpresa e una scommessa nel capire quali siano i vini da produrre per esprimere al meglio le sue uve."
          position="left"
          pdf={`${pathBackend}/wp-content/uploads/2023/10/Scheda-tecnica_GAMO-22.pdf`}
        />

        <ProductWithImage
          pathColor="#c9593d"
          background={`${pathBackend}/wp-content/uploads/2023/10/Drankante_2022.png`}
          title="DRAKANTE"
          text="Nel tempo l'attività di recupero dei vigneti antichi è proseguita nelle zone di Gallicano e Molazzana. Qui abbiamo rimesso in produzione filari impiantati 40 anni fa, producendo a partire dal 2019 il <strong>Drankante.</strong> Un <strong>rosso frizzante IGT</strong> senza solfiti aggiunti, naturalmente biodinamico. Una spremuta di uva nel bicchiere."
          position="right"
          pdf={`${pathBackend}/wp-content/uploads/2023/10/Scheda-tecnica_DRANKANTE-22.pdf`}
        />

        <ProductWithImage
          pathColor="#eb8c2c"
          background={`${pathBackend}/wp-content/uploads/2023/02/Vignesperse-22.png`}
          title="VIGNESPERSE"
          text="Dalla nostra voglia di rapportarci con il territorio in una logica di rispetto della biodiversità e di recupero dei terreni vitati, nel 2019 è nato <strong>Vignesperse</strong>. Un vino bianco fresco e sapido, dall'identità 'nomade', che riassume l'impronta territoriale di questa parte della Garfagnana. Viene infatti vinificato a partire da uve Malvasia e Trebbiano, con 'vigne sparse' all'interno di 4 amministrazioni comunali differenti. In località <strong>Cascio</strong> (Molazzana), <strong>Campo</strong> (Gallicano), <strong>Roccalberti</strong> (Camporgiano), <strong>Antisciana</strong> (Castelnuovo Garfagnana)."
          position="left"
          pdf={`${pathBackend}/wp-content/uploads/2023/02/Scheda-tecnica_VIGNESPERSE-22.pdf`}
        />

        <ProductWithImage
          pathColor="#c6b67b"
          background={`${pathBackend}/wp-content/uploads/2023/02/Riesling.png`}
          title="Riesling"
          text="Prodotto nei nostri vigneti alla <strong>Foce di Careggine</strong>, a 1050 mt s.l.m. a pochi km dalla costa, su terreni rocciosi famosi per il marmo bianco. Elevato sbalzo termico tra giorno e notte, il suolo e l'elevata altezza garantiscono una pronunciata mineralità, ma con influenze della flora mediterranea. Poco alcool, elevata acidità, grande sapidità, idrocarburi, pietra, lana bagnata e frutta matura sono alcune delle caratteristiche di questo vino."
          position="right"
          pdf={`${pathBackend}/wp-content/uploads/2023/10/Scheda-tecnica_RIESLING-21.pdf`}
        />
        <div className="containerMore">
          <div className="button">
            <NavLink
              to="/vino"
              exact
              className="hover__dark"
              activeStyle={{
                backgroundColor: 'white',
                color: 'black',
                borderColor: 'black',
              }}
            >
              Scopri tutti i Vini
            </NavLink>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
