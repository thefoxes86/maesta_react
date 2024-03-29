import React, { useEffect, useRef, useState } from 'react'
import { checkHoverPersonalized } from '../../lib/cursorPerzonalize'
import './form.scss'
import emailjs from '@emailjs/browser'

export default function Form(props) {
  const form = useRef()
  const [status, setStatus] = useState('inactive')

  const sendEmail = e => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          result.text === 'OK' ? setStatus('sended') : setStatus('error')
        },
        error => {
          setStatus('error')
          console.log(error.text)
        }
      )
  }

  useEffect(() => {
    checkHoverPersonalized()
  }, [])
  return (
    <section className="contacts__grid__container">
      <div className="form">
        <h2 className="form__title">Scrivi</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Nome
            <input type="text" name="user_name" />
          </label>
          <label>
            Mail
            <input type="text" name="user_email" />
          </label>
          <label>
            Messaggio
            <textarea name="message" />
          </label>

          <input
            type="submit"
            value={`${status === 'sending' ? 'Sto inviando' : 'Invia'}`}
            className={`${
              status === 'sending' ? 'disabled' : ''
            } "hover__dark"`}
          />
          {status === 'error' ? <p>C'è un errore, prva di nuovo</p> : null}
          {status === 'sended' ? <p>email inviata con successo</p> : null}
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
          lo conquistano sempre di più diventando la grande passione della sua
          vita, insieme all'agricoltura biodinamica. È lui l'anima dell nostre
          vigne, curandole in modo maniacale e saltando senza sosta da una
          all'altra.
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
  )
}
