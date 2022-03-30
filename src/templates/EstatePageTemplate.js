import React from 'react'
import {
  FaSquare,
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
import SliderSmall from '../components/sliderSmall/sliderSmall'
import SliderLarge from '../components/sliderLarge/sliderLarge'
import ButtonSecondary from '../components/buttonSecondary/buttonSecondary'
import { insertBreakBetweenDigits } from '../components/functions'
import { ContactAgentBlock } from '../components/contact-agent-block/contact-agent-block'

const EstatePageTemplate = props => {
  const nieruchomosc = props.data.contentfulNieruchomosc
  const mieszkanieDetails = [
    [<FaSquare />, 'Powierzchnia Całkowita m2', nieruchomosc.powierzchniaCalkowitaM2],
    [<FaElementor />, 'Pokoje', nieruchomosc.liczbaPokoi],
    [<FaFire />, 'Ogrzewanie', nieruchomosc.ogrzewanie],
    [<FaStream />, 'Piętro', nieruchomosc.pietro],
    [<FaCompass />, 'Ekspozycja okien', nieruchomosc.ekspozycjaOkien],
    [<FaDungeon />, 'Piwnica', nieruchomosc.piwnica],
    [<FaBoxOpen />, 'Balkon', nieruchomosc.balkon],
    [<FaHands />, 'Gwarancja', nieruchomosc.gwarancja],
  ]
  const budynekDetails = [
    [<FaCity />, 'Rok budowy', nieruchomosc.rokBudowy],
    [<FaAngleDoubleUp />, 'Winda', nieruchomosc.winda],
    [<FaBuilding />, 'Rodzaj budynku', nieruchomosc.rodzajBudynku],
    [<FaSortNumericUpAlt />, 'Liczba pięter', nieruchomosc.liczbaPieter],
  ]
  const oplatyDetails = [
    [<FaHandHoldingUsd />, 'Czynsz administracyjny', `${nieruchomosc.czynszAdministracyjny} PLN`],
    [<FaDollarSign />, 'Cena', `${insertBreakBetweenDigits(nieruchomosc.cena)} PLN`],
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
            </div>
          </div>
        </div>
        <Img
          className={estatePageStyles.img}
          fluid={nieruchomosc.zdjecia[0].fluid}
          alt={nieruchomosc.zdjecia[0].title}
        />
        <div className={estatePageStyles.slider}>
          <SliderSmall images={nieruchomosc.zdjecia} />
        </div>
      </header>
      {/* Navigation Buttons */}
      <div className={`${estatePageStyles.navigationButtons} ${estatePageStyles.pdngHz}`}>
        <Link className={estatePageStyles.backToWyszukiwarka} to="/wyszukiwarka">
          <FaArrowCircleLeft />
          Wyszukiwarka
        </Link>
        <ButtonSecondary goTo="informacje" />
        <ButtonSecondary goTo="zdjęcia" />
        <ButtonSecondary goTo="lokalizacja" />
        <ButtonSecondary goTo="opis" />
      </div>
      {/* Sections */}
      <div className={`${estatePageStyles.content} ${estatePageStyles.pdngHz}`}>
        <div className={estatePageStyles.contentMain}>
          <EstateDetailsSection title="Mieszkanie" goToId={'informacje'}>
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

          <div className={estatePageStyles.hider}>
            <EstateDetailsSection title="Zdjęcia" goToId={'zdjęcia'}>
              <div className={estatePageStyles.images}>
                <SliderLarge images={nieruchomosc.zdjecia} />
              </div>
            </EstateDetailsSection>
          </div>

          <EstateDetailsSection title="Lokalizacja" goToId={'lokalizacja'}>
            <div className={estatePageStyles.localizationWrapper}>
              <iframe
                title="lokalizacja"
                width={'100%'}
                height="450"
                frameborder="0"
                style={{ border: '0' }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCjkcBKvbFBSRxIJZ_NnSecUsF0PFgpBtc&q=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}&zoom=16&center=${nieruchomosc.lokalizacja.lat},${nieruchomosc.lokalizacja.lon}`}
              />
              <div className={estatePageStyles.localizationDetailsWrapper}>
                {lokalizacjaDetails.map(detail => (
                  <SingleDetail detail={detail} />
                ))}
              </div>
            </div>
          </EstateDetailsSection>

          <EstateDetailsSection title="Opis" goToId={'opis'}>
            <div className={estatePageStyles.description}>
              {nieruchomosc.opis && documentToReactComponents(JSON.parse(nieruchomosc.opis.raw))}
            </div>
          </EstateDetailsSection>
        </div>
        <ContactAgentBlock nieruchomosc={nieruchomosc} />
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
      liczbaPokoi
      ogrzewanie
      rokBudowy
      winda
      rodzajBudynku
      liczbaPieter
      pietro
      ekspozycjaOkien
      piwnica
      balkon
      gwarancja
      imieINazwiskoAgenta
      numerTelefonuAgenta
      emailAgenta
      czynszAdministracyjny
      zdjecieAgenta {
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
