import React from 'react'
import { GrContact, GrInstagram, GrPhone, GrMailOption, GrCalendar } from 'react-icons/gr'
import { Link } from 'gatsby'

import contactFormStyles from './contactForm.module.scss'

const ContactForm = () => {
  return (
    <div className={`${contactFormStyles.contactFormWrapper} ${contactFormStyles.pdngHz}`}>
      <h1>Kontakt</h1>
      <div className={contactFormStyles.contactFormBody}>
        <div className={contactFormStyles.contactDetails}>
          <div className={contactFormStyles.contactText}>
            <GrContact />
            <p>
              Wyślij do nas zapytanie a my postaramy się na nie odpowiedzieć jak najszybciej! Możesz
              również zadzwonić do nas bezpośrednio na podany numer!
            </p>
          </div>
          <div className={contactFormStyles.contactAddress}>
            <div>
              <Link to="https://www.instagram.com/mieszkanie_po_krakowsku/" target="_blank">
                <GrInstagram />
                <span>Instagram</span>
              </Link>
            </div>
            <div>
              <GrPhone />
              <span>736 848 567</span>
            </div>
            <div>
              <GrMailOption />
              <span>mieszkaniepokrakowsku@gmail.com</span>
            </div>
            <div>
              <GrCalendar />
              <span>Pon - Sob od 09:00 do 20:00</span>
            </div>
          </div>
        </div>
        <div className={contactFormStyles.contactForm}>
          <h3>Uzupełnij formularz</h3>
          <form action="contactform.php" method="post">
            <input type="text" placeholder="Imie i Nazwisko" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Temat / Nazwa nieruchomości" required />
            <textarea placeholder="Treść" required />
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
