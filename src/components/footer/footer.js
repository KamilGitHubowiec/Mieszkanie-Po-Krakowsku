import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import footer from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={`${footer.footer} ${footer.pdngHz}`}>
      <div className={footer.top}>
        <h3>MIESZKANIE PO KRAKOWSKU</h3>
        <div className={footer.contactDetails}>
          <h4>Skontakuj się z nami:</h4>
          <p>736 848 567</p>
          <p>mieszkaniepokrakowsku@gmail.com</p>
          <p>Pon - Sob od 09:00 do 20:00</p>
        </div>
        <Link to="https://www.instagram.com/mieszkanie_po_krakowsku/" target="_blank">
          Instagram
        </Link>
      </div>
      <div className={footer.bottom}>
        <Link to="https://www.linkedin.com/in/kamil-góralewicz-03964a15b" target="_blank">
          Copyright {data.site.siteMetadata.author}, © 2021
        </Link>
      </div>
    </div>
  )
}

export default Footer
