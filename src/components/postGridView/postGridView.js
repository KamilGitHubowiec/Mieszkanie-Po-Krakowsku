import React, { useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FiCameraOff } from 'react-icons/fi'

import recentBlogPost from './postGridView.module.scss'
import SliderSmall from '../sliderSmall/sliderSmall'
import { insertBreakBetweenDigits } from '../functions'

const PostGridView = () => {
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
            aktualne
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
    <div className={`${recentBlogPost.recentBlogPost} ${recentBlogPost.pdngHz}`}>
      <h2>Ostatnio dodane nieruchmości</h2>
      <div className={recentBlogPost.posts}>
        {data.allContentfulNieruchomosc.edges.slice(0, 6).map(edge => {
          return (
            <div className={recentBlogPost.post}>
              {edge.node.zdjecia ? (
                <div className={recentBlogPost.img}>
                  <SliderSmall
                    images={edge.node.zdjecia}
                    linkTo={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}
                  />
                  {edge.node.aktualne ? (
                    <span
                      className={recentBlogPost.isAvailableTag}
                      style={{ backgroundColor: '#00ab58' }}
                    >
                      Aktualne
                    </span>
                  ) : (
                    <span
                      className={recentBlogPost.isAvailableTag}
                      style={{ backgroundColor: 'red' }}
                    >
                      Sprzedane
                    </span>
                  )}
                </div>
              ) : (
                <div className={recentBlogPost.img}>
                  <FiCameraOff />
                </div>
              )}
              <div className={recentBlogPost.detailsWrapper}>
                <h3>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    {edge.node.miasto} {edge.node.dzielnica && '/ ' + edge.node.dzielnica}
                  </Link>
                </h3>
                <h4> {edge.node.ulica} </h4>
                <div className={recentBlogPost.description}>
                  <p>
                    {insertBreakBetweenDigits(edge.node.cena)}
                    <span>PLN</span>
                  </p>
                  <p>
                    {insertBreakBetweenDigits(
                      Math.round(edge.node.cena / edge.node.powierzchniaCalkowitaM2)
                    )}
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
              </div>
            </div>
          )
        })}
      </div>

      <Link className={recentBlogPost.showMore} to="/wyszukiwarka">
        Zobacz więcej
      </Link>
    </div>
  )
}

export default PostGridView
