import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  FaSquare,
  FaTint,
  FaCompass,
  FaDungeon,
  FaFire,
  FaBuilding,
  FaDollarSign,
  FaHandHoldingUsd,
  FaHands,
  FaSortNumericUpAlt,
  FaStream,
  FaElementor,
  FaCity,
  FaAngleDoubleUp,
  FaBoxOpen,
} from 'react-icons/fa'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import estatePage from '../styles/estatePageTemplate.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'
import EstateDetails from '../components/estateDetails'

const EstatePageTemplate = props => {
  const nieruchomosc = props.data.contentfulNieruchomosc

  return (
    <Layout>
      <Head title={nieruchomosc.ulica} />
      <header className={estatePage.header}>
        <Img
          className={estatePage.img}
          fluid={nieruchomosc.zdjecia[3].fluid}
          alt={nieruchomosc.zdjecia[0].title}
        />
        <div className={estatePage.baners}>
          <div className={estatePage.banerSmall}>{nieruchomosc.ulica}</div>
          <div className={estatePage.banerBig}>
            <div>
              <h1>
                Mieszkanie na sprzedaż - {`${nieruchomosc.miasto}, ${nieruchomosc.dzielnica}`}
              </h1>
              <p>{nieruchomosc.ulica}</p>
            </div>
            <div>
              <h1>{nieruchomosc.cena} PLN</h1>
              <p>
                {Math.round(nieruchomosc.cena / nieruchomosc.powierzchniaCalkowitaM2)} PLN/m
                <sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className={estatePage.content}>
        <EstateDetails
          title={'Mieszkanie'}
          details={[
            [<FaSquare />, 'Powierzchnia Całkowita m2', nieruchomosc.powierzchniaCalkowitaM2],
            [<FaElementor />, 'Pokoje', nieruchomosc.pokoje],
            [<FaFire />, 'Ogrzewanie', nieruchomosc.ogrzewanie],
            [<FaTint />, 'Ciepła woda', nieruchomosc.ciepaWoda],

            [<FaStream />, 'Piętro', nieruchomosc.pitro],
            [<FaCompass />, 'Ekspozycja okien', nieruchomosc.ekspozycjaOkien],

            [<FaDungeon />, 'Piwnica', nieruchomosc.piwnica],
            [<FaBoxOpen />, 'Balkon', nieruchomosc.balkon],
            [<FaHands />, 'Gwarancja', nieruchomosc.gwarancja],
          ]}
        />
        <EstateDetails
          title={'Budynek'}
          details={[
            [<FaCity />, 'Rok budowy', nieruchomosc.rokBudowy],
            [<FaAngleDoubleUp />, 'Winda', nieruchomosc.winda],
            [<FaBuilding />, 'Rodzaj budynku', nieruchomosc.rodzajBudynku],
            [<FaSortNumericUpAlt />, 'Liczba pięter', nieruchomosc.liczbaPiter],
          ]}
        />
        <EstateDetails
          title={'Opłaty'}
          details={[
            [<FaHandHoldingUsd />, 'Czynsz administracyjny', nieruchomosc.czynszAdministracyjny],
            [<FaDollarSign />, 'Cena', nieruchomosc.cena],
          ]}
        />
        <section className={estatePage.section}>
          <div className={estatePage.label}>Zdjęcia</div>
          <div className={estatePage.images}>
            {nieruchomosc.zdjecia &&
              nieruchomosc.zdjecia.map(zdjecie => {
                return <Img fluid={zdjecie.fluid} alt={zdjecie.title} />
              })}
          </div>
        </section>
      </div>

      {/* {nieruchomosc.opis && documentToReactComponents(JSON.parse(nieruchomosc.opis.raw))} */}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulNieruchomosc(id: { eq: $id }) {
      miasto
      dzielnica
      ulica
      powierzchniaCalkowitaM2
      cena
      pokoje
      ogrzewanie
      ciepaWoda
      rokBudowy
      winda
      rodzajBudynku
      liczbaPiter
      pitro
      ekspozycjaOkien
      czynszAdministracyjny
      piwnica
      balkon
      gwarancja
      opis {
        raw
      }
      zdjecia {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
      }
    }
  }
`

export default EstatePageTemplate

// We dont import useStaticQuery in template files
// In templates we have to define our query and export it
// there is no other way to access context which contains slug
// It is passed as a prop to the component
