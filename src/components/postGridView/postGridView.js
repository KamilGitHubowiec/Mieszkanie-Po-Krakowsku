import React from 'react'
import { Link } from 'gatsby'
import { FiCameraOff } from 'react-icons/fi'

import { useFetchEstates } from './use-fetch-estates'
import { insertBreakBetweenDigits } from '../functions'
import SliderSmall from '../sliderSmall/sliderSmall'

import styles from './postGridView.module.scss'

const ESTATES_TO_DISPLAY = 6

const PostGridView = () => {
  const data = useFetchEstates()

  const renderAvailabilityTag = available => {
    if (available) {
      return (
        <span className={styles.isAvailableTag} style={{ backgroundColor: '#00ab58' }}>
          Aktualne
        </span>
      )
    }

    return (
      <span className={styles.isAvailableTag} style={{ backgroundColor: 'red' }}>
        Sprzedane
      </span>
    )
  }

  return (
    <div className={`${styles.recentBlogPost} ${styles.pdngHz}`}>
      <h2>Ostatnio dodane nieruchmości</h2>
      <div className={styles.posts}>
        {data.allContentfulNieruchomosc.edges.slice(0, ESTATES_TO_DISPLAY).map(edge => {
          return (
            <div className={styles.post}>
              {edge.node.zdjecia ? (
                <div className={styles.img}>
                  <SliderSmall
                    images={edge.node.zdjecia}
                    linkTo={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}
                  />
                  {renderAvailabilityTag(edge.node.aktualne)}
                </div>
              ) : (
                <div className={styles.img}>
                  <FiCameraOff />
                </div>
              )}
              <div className={styles.detailsWrapper}>
                <h3>
                  <Link to={`/nieruchomosc/${edge.node.id}/${edge.node.miasto}/${edge.node.ulica}`}>
                    {edge.node.miasto} {edge.node.dzielnica && '/ ' + edge.node.dzielnica}
                  </Link>
                </h3>
                <h4> {edge.node.ulica} </h4>
                <div className={styles.description}>
                  <p>
                    {insertBreakBetweenDigits(edge.node.cena)}
                    <span>PLN</span>
                  </p>
                  <p>
                    {edge.node.liczbaPokoi}
                    <span> - ilość pokoi</span>
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

      <Link className={styles.showMore} to="/wyszukiwarka">
        Zobacz więcej
      </Link>
    </div>
  )
}

export default PostGridView
