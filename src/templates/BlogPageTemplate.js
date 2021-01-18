import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

// We dont import useStaticQuery in template files
// In templates we have to define our query and export it
// there is no other way to access context which contains slug
// It is passed as a prop to the component

const BlogPageTemplate = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulNieruchomosc.miasto} />
      <h1>{props.data.contentfulNieruchomosc.miasto}</h1>
      <p>{props.data.contentfulNieruchomosc.createdAt}</p>
      {props.data.contentfulNieruchomosc.opis &&
        documentToReactComponents(JSON.parse(props.data.contentfulNieruchomosc.opis.raw))}
      {props.data.contentfulNieruchomosc.zdjecia &&
        props.data.contentfulNieruchomosc.zdjecia.map(zdjecie => {
          return <Img fixed={zdjecie.fixed} alt={zdjecie.title} />
        })}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulNieruchomosc(id: { eq: $id }) {
      miasto
      dzielnica
      ulica
      cena
      createdAt(formatString: "DD.MM.YYYYr. HH:mm")
      powierzchniaCalkowitaM2
      opis {
        raw
      }
      zdjecia {
        fixed {
          ...GatsbyContentfulFixed
        }
        title
      }
    }
  }
`

export default BlogPageTemplate
