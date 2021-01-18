import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import header from '../styles/header.module.scss'

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
      <BackgroundImage className={header.image} fluid={data.file.childImageSharp.fluid} alt={data.file.name}>
        <div className={header.overlay}>Mieszkanie Po Krakowsku</div>
      </BackgroundImage>
    </div>
  )
}

export default Header
