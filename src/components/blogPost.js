import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNieruchomosc ( sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            miasto
            dzielnica
            ulica
            cena
            createdAt(formatString: "DD MM YYYY")
            powierzchniaCalkowitaM2
            id
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentfulNieruchomosc.edges.map((edge) => {
        return (
          <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
            <p> {edge.node.slug} </p>
            <p> {edge.node.miasto} </p>
            <p> {edge.node.dzielnica} </p>
            <p> {edge.node.ulica} </p>
            <p> {edge.node.cena} </p>
            <p> {edge.node.createdAt} </p>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogPost