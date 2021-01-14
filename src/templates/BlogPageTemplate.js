import React from 'react'
import { graphql } from 'gatsby' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

// We dont import useStaticQuery in template files
// In templates we have to define our query and export it
// there is no other way to access context which contains slug
// It is passed as a prop to the component

export const query = graphql`
  query($id: String!) {
    contentfulNieruchomosc(id: {eq: $id}) {
      miasto
      dzielnica
      ulica
      cena
      createdAt(formatString: "DD.MM.YYYYr. HH:mm")
      powierzchniaCalkowitaM2
      opis {
        raw
      }
    }
  }
`
const BlogPageTemplate = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulNieruchomosc.miasto}</h1>
      <p>{props.data.contentfulNieruchomosc.createdAt}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulNieruchomosc.opis.raw))}
    </Layout>
  )
}

export default BlogPageTemplate