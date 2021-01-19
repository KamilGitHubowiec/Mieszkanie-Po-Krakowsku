import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import recentBlogPost from '../styles/recentBlogPost.module.scss'

const RecentBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNieruchomosc(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            miasto
            dzielnica
            ulica
            cena
            powierzchniaCalkowitaM2
            id
            zdjecia {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div className={recentBlogPost.recentBlogPost}>
      <h2>Ostatnio dodane nieruchmości</h2>
      <div className={recentBlogPost.posts}>
        {data.allContentfulNieruchomosc.edges.map(edge => {
          return (
            <Link
              className={recentBlogPost.post}
              to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}
            >
              {edge.node.zdjecia ? (
                <div>
                  {console.log(edge.node.zdjecia)}
                  {edge.node.zdjecia.map(zdjecie => {
                    return (
                      <Img
                        className={recentBlogPost.img}
                        fluid={zdjecie.fluid}
                        alt={zdjecie.title}
                      />
                    )
                  })}
                </div>
              ) : (
                <div className={recentBlogPost.img}>Brak zdjęć</div>
              )}
              <h3>
                {edge.node.miasto} {edge.node.dzielnica && '/ ' + edge.node.dzielnica}
              </h3>
              <h4> {edge.node.ulica} </h4>
              <div className={recentBlogPost.description}>
                <p>
                  {edge.node.cena
                    .toString()
                    .match(/.{1,3}/g)
                    .join(' ')}{' '}
                  <span>PLN</span>
                </p>
                <p>
                  {Math.round(edge.node.cena / edge.node.powierzchniaCalkowitaM2)}{' '}
                  <span>
                    PLN/m<sup>2</sup>
                  </span>
                </p>
                <p>
                  {edge.node.powierzchniaCalkowitaM2}{' '}
                  <span>
                    m<sup>2</sup>
                  </span>
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default RecentBlogPost
