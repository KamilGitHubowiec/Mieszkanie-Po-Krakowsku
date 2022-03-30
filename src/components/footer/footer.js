import React from 'react'
import { Link } from 'gatsby'

import { GrInstagram } from 'react-icons/gr'

import styles from './footer.module.scss'

const Footer = () =>
  (
    <div className={`${styles.footer} ${styles.pdngHz}`}>
      <div className={styles.top}>
        <h3>MIESZKANIE PO KRAKOWSKU</h3>
        <div className={styles.contactDetails}>
          <h4>Skontakuj się z nami:</h4>
          <p>736 848 567</p>
          <p>mieszkaniepokrakowsku@gmail.com</p>
          <p>Pon - Sob od 09:00 do 20:00</p>
        </div>
        <div className={styles.instagram} >
          <Link className={styles.instagramLink} to='https://www.instagram.com/mieszkanie_po_krakowsku/' target='_blank'>
            <GrInstagram />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  )


export default Footer
