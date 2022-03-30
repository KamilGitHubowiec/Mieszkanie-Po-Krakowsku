import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import header from './header.module.scss'

const Header = () => {
  const logoImage = useStaticQuery(graphql`
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
        fluid={logoImage.file.childImageSharp.fluid}
        alt={logoImage.file.name}
      />
      <div className={header.overlay}>
        <h1>Mieszkanie Po Krakowsku</h1>
        <h2>Najlepsze mieszkania w Krakowie</h2>
        <Link to="/wyszukiwarka">Zobacz całą ofertę</Link>
      </div>
    </div>
  )
}

export default Header
