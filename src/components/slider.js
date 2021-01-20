import React, { useState } from 'react'
import Img from 'gatsby-image'

import slider from '../styles/slider.module.scss'

const Slider = ({ images }) => {
  const sliderArr = [images[images.length - 1], ...images, images[0]]
  const [x, setX] = useState(0)
  const [transition, setTransition] = useState('0.5s')

  const goLeft = () => {
    if (x >= 0) return
    setX(x + 100)
    setTransition('0.5s')
  }

  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) return
    setX(x - 100)
    setTransition('0.5s')
  }

  // When the transition on the last img ends it moves
  // to the first image (which is the same image as the last one) without effects
  // so when the user clicks to go the next picture
  // it looks like it looped
  const handleTransition = () => {
    if (x === 0) {
      setTransition('none')
      setX(-100 * (sliderArr.length - 2))
    }
    if (x === -100 * (sliderArr.length - 1)) {
      setTransition('none')
      setX(-100)
    }
  }

  return (
    <div className={slider.slider}>
      {sliderArr.map(item => {
        return (
          <div
            className={slider.slide}
            style={{
              transition: `${transition}`,
              transform: `translateX(${x}%)`,
            }}
            onTransitionEnd={handleTransition}
          >
            <Img className={slider.img} fluid={item.fluid} alt={item.title} />
          </div>
        )
      })}
      {images.length > 1 && (
        <div>
          <button className={slider.goLeft} onClick={goLeft}></button>
          <button className={slider.goRight} onClick={goRight}></button>
        </div>
      )}
      )
    </div>
  )
}

export default Slider
