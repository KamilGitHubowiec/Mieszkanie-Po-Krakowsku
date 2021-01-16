import React from 'react'
import { graphql, useStaticQuery } from 'gatsby' 
import Img from "gatsby-image"

import header from '../styles/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file (relativePath: { eq: "homeBackground.jpg"}) {
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
      <Img className={header.image} fluid={data.file.childImageSharp.fluid} alt={data.file.name} />
    </div>
  )
}

export default Header