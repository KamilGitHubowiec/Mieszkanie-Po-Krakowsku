import React from 'react'
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
  FaArrowCircleLeft,
} from 'react-icons/fa'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import estatePageStyles from '../styles/estatePageTemplate.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import EstateDetailsSection from '../components/estateDetailsSection/estateDetailsSection'
import SingleDetail from '../components/singleDetail/singleDetail'
import ButtonSecondary from '../components/buttonSecondary/buttonSecondary'
import { insertBreakBetweenDigits } from '../components/functions'

const EstatePageTemplate = props => {
  const nieruchomosc = props.data.contentfulNieruchomosc
  const mieszkanieDetails = [
    [<FaSquare />, 'Powierzchnia Całkowita m2', nieruchomosc.powierzchniaCalkowitaM2],
    [<FaElementor />, 'Pokoje', nieruchomosc.pokoje],
    [<FaFire />, 'Ogrzewanie', nieruchomosc.ogrzewanie],
    [<FaTint />, 'Ciepła woda', nieruchomosc.ciepaWoda],
    [<FaStream />, 'Piętro', nieruchomosc.pitro],
    [<FaCompass />, 'Ekspozycja okien', nieruchomosc.ekspozycjaOkien],
    [<FaDungeon />, 'Piwnica', nieruchomosc.piwnica],
    [<FaBoxOpen />, 'Balkon', nieruchomosc.balkon],
    [<FaHands />, 'Gwarancja', nieruchomosc.gwarancja],
  ]
  const budynekDetails = [
    [<FaCity />, 'Rok budowy', nieruchomosc.rokBudowy],
    [<FaAngleDoubleUp />, 'Winda', nieruchomosc.winda],
    [<FaBuilding />, 'Rodzaj budynku', nieruchomosc.rodzajBudynku],
    [<FaSortNumericUpAlt />, 'Liczba pięter', nieruchomosc.liczbaPiter],
  ]
  const oplatyDetails = [
    [<FaHandHoldingUsd />, 'Czynsz administracyjny', nieruchomosc.czynszAdministracyjny],
    [<FaDollarSign />, 'Cena', nieruchomosc.cena],
  ]
  const lokalizacjaDetails = [
    [<FaMapMarkerAlt />, 'Rejon', `${(nieruchomosc.miasto, nieruchomosc.dzielnica)}`],
    [<FaMapMarkerAlt />, 'Ulica', nieruchomosc.ulica],
  ]

  return (
    <Layout>
      <Head title={nieruchomosc.ulica} />
      {/* Header */}
      <header className={estatePageStyles.header}>
        <Img
          className={estatePageStyles.img}
          fluid={nieruchomosc.zdjecia[0].fluid}
          alt={nieruchomosc.zdjecia[0].title}
        />
        <div className={estatePageStyles.baners}>
          <div className={estatePageStyles.banerSmall}>{nieruchomosc.ulica}</div>
          <div className={estatePageStyles.banerBig}>
            <div>
              <h1>
                Mieszkanie na sprzedaż - {`${nieruchomosc.miasto}, ${nieruchomosc.dzielnica}`}
              </h1>
              <p>{nieruchomosc.ulica}</p>
            </div>
            <div>
              <h1>{insertBreakBetweenDigits(nieruchomosc.cena)} PLN</h1>
              <p>
                {insertBreakBetweenDigits(
                  Math.round(nieruchomosc.cena / nieruchomosc.powierzchniaCalkowitaM2)
                )}{' '}
                PLN/m
                <sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation Buttons */}
      <div className={estatePageStyles.navigationButtons}>
        <Link className={estatePageStyles.backToWyszukiwarka} to="/wyszukiwarka">
          <FaArrowCircleLeft />
          Wyszukiwarka
        </Link>
        <ButtonSecondary goTo="informacje" />
        <ButtonSecondary goTo="lokalizacja" />
        <ButtonSecondary goTo="zdjęcia" />
        <ButtonSecondary goTo="opis" />
      </div>
      {/* Sections */}
      <div className={estatePageStyles.content}>
        <div className={estatePageStyles.contentMain}>
          <EstateDetailsSection title="Mieszkanie" id="informacje">
            <div className={estatePageStyles.detailsWrapper}>
              {mieszkanieDetails.map(detail => (
                <SingleDetail detail={detail} />
              ))}
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Budynek">
            <div className={estatePageStyles.detailsWrapper}>
              {budynekDetails.map(detail => (
                <SingleDetail detail={detail} />
              ))}
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Opłaty">
            <div className={estatePageStyles.detailsWrapper}>
              {oplatyDetails.map(detail => (
                <SingleDetail detail={detail} />
              ))}
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Lokalizacja" id="lokalizacja">
            <div className={estatePageStyles.localizationWrapper}>
              <iframe
                title="lokalizacja"
                width={'100%'}
                height="500"
                frameborder="0"
                style={{ border: '0' }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB3Qv0-byCedLJfXzuPYAflrNuDSPQMFLM&q=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}&zoom=16&center=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}`}
              />
              <div className={estatePageStyles.localizationDetailsWrapper}>
                {lokalizacjaDetails.map(detail => (
                  <SingleDetail detail={detail} />
                ))}
              </div>
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Zdjęcia" id="zdjęcia">
            <div className={estatePageStyles.images}>
              {nieruchomosc.zdjecia &&
                nieruchomosc.zdjecia.map(zdjecie => {
                  return <Img fluid={zdjecie.fluid} alt={zdjecie.title} />
                })}
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Opis" id="opis">
            <div className={estatePageStyles.description}>
              {nieruchomosc.opis && documentToReactComponents(JSON.parse(nieruchomosc.opis.raw))}
            </div>
          </EstateDetailsSection>
        </div>

        <div className={estatePageStyles.contentContactAgent}>
          <div className={estatePageStyles.agentHeader}>Skontaktuj się z agentem</div>
          <div className={estatePageStyles.agentPhoto}>
            <Img
              fluid={nieruchomosc.zdjecieAgentaNieruchomosci.fluid}
              alt={nieruchomosc.zdjecieAgentaNieruchomosci.title}
            />
          </div>
          <ul className={estatePageStyles.agentDetails}>
            <li>
              <div className={estatePageStyles.agentDetailIcon}>
                <FaRegUser />
              </div>
              {nieruchomosc.imieINazwiskoAgentaNieruchomosci}
            </li>

            <li>
              <div className={estatePageStyles.agentDetailIcon}>
                <FaMobileAlt />
              </div>
              {nieruchomosc.numerTelefonuAgentaNieruchomosci}
            </li>

            <li>
              <div className={estatePageStyles.agentDetailIcon}>
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
      zdjecia {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
      }
      opis {
        raw
      }
    }
  }
`

export default EstatePageTemplate
