import React from 'react'
import { graphql, useStaticQuery } from 'gatsby' 
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file (relativePath: { eq: "homeBackground.png"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
  `) 

  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} alt={data.file.name} />
    </div>
  )
}

export default Header