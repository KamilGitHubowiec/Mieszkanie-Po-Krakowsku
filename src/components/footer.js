import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    <div>
      Created by <a href="www.linkedin.com/in/kamil-góralewicz-03964a15b" target="_blank">{ data.site.siteMetadata.author }</a>, © 2020 
    </div>
  )
}

export default Footer