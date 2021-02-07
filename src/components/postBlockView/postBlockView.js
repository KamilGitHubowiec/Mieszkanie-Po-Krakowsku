import React from 'react'
import { FaFire, FaSquare, FaElementor, FaStream } from 'react-icons/fa'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import postBlockViewStyles from './postBlockView.module.scss'
import SingleDetail from '../singleDetail/singleDetail'
import { insertBreakBetweenDigits } from '../functions'

const PostBlockView = ({ nieruchomosc }) => {
  const basicDetails = [
    [<FaSquare />, 'Pow. całkowita', nieruchomosc.powierzchniaCalkowitaM2],
    [<FaFire />, 'Ogrzewanie', nieruchomosc.ogrzewanie],
    [<FaStream />, 'Liczba pokoi', nieruchomosc.pokoje],
    [<FaElementor />, 'Piętro', nieruchomosc.pitro],
  ]

  return (
    <div className={postBlockViewStyles.result} key={nieruchomosc.id}>
      <div className={postBlockViewStyles.images}>
        {nieruchomosc.zdjecia ? (
          <Link
            to={`/nieruchomosc/${nieruchomosc.id}/${nieruchomosc.miasto}/${nieruchomosc.ulica}`}
          >
            <Img className={postBlockViewStyles.image} fluid={nieruchomosc.zdjecia[0].fluid} />
          </Link>
        ) : (
          <p>Brak zdjęć</p>
        )}
      </div>
      <div className={postBlockViewStyles.details}>
        <Link to={`/nieruchomosc/${nieruchomosc.id}/${nieruchomosc.miasto}/${nieruchomosc.ulica}`}>
          <h4>{`${nieruchomosc.miasto}, ${nieruchomosc.dzielnica}`}</h4>
        </Link>

        <h5>{nieruchomosc.ulica} </h5>

        <ul>
          {basicDetails.map(detail => (
            <SingleDetail detail={detail} />
          ))}
        </ul>

        <div className={postBlockViewStyles.shortDescription}>
          <p className={postBlockViewStyles.stylemebitch}>
            <span>{nieruchomosc.krotkiOpis && nieruchomosc.krotkiOpis[0]}</span>
            {nieruchomosc.krotkiOpis && nieruchomosc.krotkiOpis.slice(1, 180) + ' [...]'}
          </p>
        </div>
      </div>

      <div className={postBlockViewStyles.priceAndButton}>
        <div>
          <h3>
            {insertBreakBetweenDigits(nieruchomosc.cena)} <span>PLN</span>
          </h3>
          <p>
            {Math.round(nieruchomosc.cena / nieruchomosc.powierzchniaCalkowitaM2)}{' '}
            <span>
              PLN/m<sup>2</sup>
            </span>
          </p>
        </div>
        <Link to={`/nieruchomosc/${nieruchomosc.id}/${nieruchomosc.miasto}/${nieruchomosc.ulica}`}>
          <button>Sprawdź</button>
        </Link>
      </div>
    </div>
  )
}

export default PostBlockView
