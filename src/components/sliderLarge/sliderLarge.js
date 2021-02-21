import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Img from 'gatsby-image'

import sliderLargeStyles from './sliderLarge.module.scss'

const SliderLarge = ({ images }) => {
  const [showSlider, setShowSlider] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  let sliderAnimation = `${sliderLargeStyles.sliderContainer}`

  if (showSlider) {
    sliderAnimation = `${sliderLargeStyles.sliderContainer} ${sliderLargeStyles.open}`
  }

  const openSlider = e => {
    console.log(e.target.fluid.src)
    console.log(e.target.src.slice(6))
    console.log(images[0].fluid.src)
    setCurrentSlide(images.findIndex(zdjecie => zdjecie.fluid.src === e.target.src.slice(6)))
    setShowSlider(true)
  }

  const closeSlider = () => {
    setShowSlider(false)
  }

  const goLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goRight = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <>
      <div className={sliderLargeStyles.imagesContainer}>
        {images &&
          images.map(zdjecie => {
            return (
              <div onClick={openSlider}>
                <Img className={sliderLargeStyles.img} fluid={zdjecie.fluid} alt={zdjecie.title} />
              </div>
            )
          })}
      </div>
      <div className={sliderAnimation}>
        <div className={sliderLargeStyles.backdrop} onClick={closeSlider}></div>
        <div className={sliderLargeStyles.popup}>
          <Img
            className={sliderLargeStyles.img}
            fluid={images[currentSlide].fluid}
            alt={images[0].title}
          />

          <div className={sliderLargeStyles.goLeft} onClick={goLeft}>
            <BsChevronLeft />
          </div>
          <div className={sliderLargeStyles.goRight} onClick={goRight}>
            <BsChevronRight />
          </div>

          <div className={sliderLargeStyles.imageCounter}>{`${currentSlide + 1}/${
            images.length
          }`}</div>
        </div>
      </div>
    </>
  )
}

export default SliderLarge
