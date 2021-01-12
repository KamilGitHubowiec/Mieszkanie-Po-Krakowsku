import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPostTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title,
              street,
              date,
              price,
              area
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li>
            {edge.node.frontmatter.title}
          </li>
        )
      })}
    </ul>
  )
}

export default BlogPostTemplate
// <p>{ data.allMarkdownRemark.edges.node.frontmatter.title }</p>
// <p>{ path.street }</p>
// <p>{ path.date }</p>
// <p>{ path.price }</p>
// <p>{ path.area }</p>