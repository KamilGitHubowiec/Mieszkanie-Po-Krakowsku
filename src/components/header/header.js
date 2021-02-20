import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import header from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homeBackground.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)

  return (
    <div className={header.header}>
      <Img
        className={header.image}
        fluid={data.file.childImageSharp.fluid}
        alt={data.file.name}
      ></Img>
      <div className={header.overlay}>
        <h1>Mieszkanie Po Krakowsku</h1>
        <h2>Najlepsze ceny w Krakowie</h2>
        <Link to="/wyszukiwarka">Zobacz całą ofertę</Link>
      </div>
    </div>
  )
}

export default Header
