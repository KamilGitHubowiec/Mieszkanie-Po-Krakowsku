import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footer from '../styles/footer.module.scss'

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
    <div className={footer.footer}>
      <ul className={footer.top}>
        <li>MIESZKANIE PO KRAKOWSKU</li>
        <li>Skontakuj się z nami:</li>
        <li>+ 48 12 123 12 32</li>
        <li>email@mieszkanieporakwosku.pl</li>
      </ul>
      <div className={footer.bottom}>
        Strona stworzona przez{' '}
        <a href="www.linkedin.com/in/kamil-góralewicz-03964a15b" target="_blank">
          {' '}
          {data.site.siteMetadata.author}
        </a>
        , © 2021
      </div>
    </div>
  )
}

export default Footer
