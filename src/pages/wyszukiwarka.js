import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaFire, FaSquare, FaElementor, FaStream } from 'react-icons/fa'

import wyszukiwarkaStyles from '../styles/wyszukiwarka.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

const Wyszukiwarka = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNieruchomosc(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            miasto
            dzielnica
            ulica
            cena
            pokoje
            ogrzewanie
            pitro
            createdAt(formatString: "DD MM YYYY")
            powierzchniaCalkowitaM2
            zdjecia {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
            }
            id
          }
        }
      }
    }
  `)
  const nieruchomosci = data.allContentfulNieruchomosc.edges

  const insertSpaceAfterThirdChar = num => {
    let numStr = num.toString()

    if (numStr.length < 3) {
      return num
    } else if (numStr.length % 3 === 0) {
      return numStr.replace(/\d{3}/g, '$& ')
    } else if (numStr.length % 3 === 1) {
      return numStr.replace(/^\d{1}/g, '$& ').replace(/\d{3}/g, '$& ')
    } else if (numStr.length % 3 === 2) {
      return numStr.replace(/^\d{2}/g, '$& ').replace(/\d{3}/g, '$& ')
    }
  }

  return (
    <Layout>
      <Head title="Wyszukiwarka" />
      <div className={wyszukiwarkaStyles.filterBar}></div>
      <div className={wyszukiwarkaStyles.body}>
        <div className={wyszukiwarkaStyles.header}>Wyniki wyszukiwania</div>

        <div className={wyszukiwarkaStyles.sortBar}>
          <div>Ilość nieruchmości: {nieruchomosci.length}</div>
          <div className={wyszukiwarkaStyles.dropdownListSort}></div>
        </div>

        <div className={wyszukiwarkaStyles.results}>
          {nieruchomosci.map(edge => {
            return (
              <div className={wyszukiwarkaStyles.result}>
                <div className={wyszukiwarkaStyles.images}>
                  {edge.node.zdjecia ? (
                    <Link
                      to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}
                    >
                      <Img
                        className={wyszukiwarkaStyles.image}
                        fluid={edge.node.zdjecia[0].fluid}
                      />
                    </Link>
                  ) : (
                    <p>Brak zdjęć</p>
                  )}
                </div>
                <div className={wyszukiwarkaStyles.details}>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    <h4>{`${edge.node.miasto}, ${edge.node.dzielnica}`}</h4>
                  </Link>
                  <h5>{edge.node.ulica} </h5>
                  <ul>
                    <li>
                      <FaSquare />
                      <p>Pow. całkowita</p>
                      {edge.node.powierzchniaCalkowitaM2}
                    </li>
                    <li>
                      <FaFire />
                      <p>Ogrzewanie</p>
                      {edge.node.ogrzewanie}
                    </li>
                    <li>
                      <FaStream />
                      <p>Liczba pokoi</p>
                      {edge.node.pokoje}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                    <li>
                      <FaElementor />
                      <p>Piętro</p>
                      {edge.node.pitro}
                    </li>
                  </ul>
                </div>

                <div className={wyszukiwarkaStyles.priceAndButton}>
                  <div>
                    <h3>
                      {insertSpaceAfterThirdChar(edge.node.cena)} <span>PLN</span>
                    </h3>
                    <p>
                      {Math.round(edge.node.cena / edge.node.powierzchniaCalkowitaM2)}{' '}
                      <span>
                        PLN/m<sup>2</sup>
                      </span>
                    </p>
                  </div>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    <button>Sprawdź</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Wyszukiwarka
