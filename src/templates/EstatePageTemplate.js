import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
  FaMapMarkerAlt,
  FaRegUser,
  FaRegEnvelope,
  FaMobileAlt,
} from 'react-icons/fa'

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
          fluid={nieruchomosc.zdjecia[0].fluid}
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
        <div className={estatePage.contentMain}>
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
            <div className={estatePage.label}>Lokalizacja</div>
            <div className={estatePage.localizationWrapper}>
              <iframe
                title="lokalizacja"
                width={'100%'}
                height="500"
                frameborder="0"
                style={{ border: '0' }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB3Qv0-byCedLJfXzuPYAflrNuDSPQMFLM&q=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}&zoom=16&center=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}`}
              />
              <div className={estatePage.localizationDetailsWrapper}>
                <div className={estatePage.detailField}>
                  <div className={estatePage.detailFieldIcon}>{<FaMapMarkerAlt />}</div>
                  <div className={estatePage.detailFieldLabel}>Rejon:</div>
                  <div className={estatePage.detailFieldValue}>
                    {nieruchomosc.miasto}, {nieruchomosc.dzielnica}
                  </div>
                </div>
                <div className={estatePage.detailField}>
                  <div className={estatePage.detailFieldIcon}>{<FaMapMarkerAlt />}</div>
                  <div className={estatePage.detailFieldLabel}>Ulica:</div>
                  <div className={estatePage.detailFieldValue}>{nieruchomosc.ulica}</div>
                </div>
              </div>
            </div>
          </section>

          <section className={estatePage.section}>
            <div className={estatePage.label}>Zdjęcia</div>
            <div className={estatePage.images}>
              {nieruchomosc.zdjecia &&
                nieruchomosc.zdjecia.map(zdjecie => {
                  return <Img fluid={zdjecie.fluid} alt={zdjecie.title} />
                })}
            </div>
          </section>

          <section className={estatePage.section}>
            <div className={estatePage.label}>Opis</div>
            <div className={estatePage.description}>
              {nieruchomosc.opis && documentToReactComponents(JSON.parse(nieruchomosc.opis.raw))}
            </div>
          </section>
        </div>

        <div className={estatePage.contentContactAgent}>
          <div className={estatePage.agentHeader}>Skontaktuj się z agentem</div>
          <div className={estatePage.agentPhoto}>
            <Img
              fluid={nieruchomosc.zdjecieAgentaNieruchomosci.fluid}
              alt={nieruchomosc.zdjecieAgentaNieruchomosci.title}
            />
          </div>
          <ul className={estatePage.agentDetails}>
            <li>
              <div className={estatePage.agentDetailIcon}>
                <FaRegUser />
              </div>
              {nieruchomosc.imieINazwiskoAgentaNieruchomosci}
            </li>
            <li>
              <div className={estatePage.agentDetailIcon}>
                <FaMobileAlt />
              </div>

              {nieruchomosc.numerTelefonuAgentaNieruchomosci}
            </li>

            <li>
              <div className={estatePage.agentDetailIcon}>
                <FaRegEnvelope />
              </div>

              {nieruchomosc.emailAgentaNieruchomosci}
            </li>
          </ul>
        </div>
      </div>
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
      imieINazwiskoAgentaNieruchomosci
      numerTelefonuAgentaNieruchomosci
      emailAgentaNieruchomosci
      zdjecieAgentaNieruchomosci {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      lokalizacja {
        lat
        lon
      }
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
