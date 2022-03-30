import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import slider from './slider.module.scss'

const SliderSmall = ({ images, linkTo }) => {
  const sliderArr = [images[images.length - 1], ...images, images[0]]
  const [x, setX] = useState(0)
  const [transition, setTransition] = useState('0.5s')

  const goLeft = () => {
    if (x >= 0) return
    setX(x + 100)
    setTransition('0.8s')
  }
  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) return
    setX(x - 100)
    setTransition('0.8s')
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
    // <Swiper
    //   slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={swiper => console.log(swiper)}
    //   loop
    // >
    //   {sliderArr.map(item => {
    //     return (
    //       <SwiperSlide>
    //         <div
    //           className={slider.slide}
    //           style={{
    //             transition: `${transition}`,
    //             transform: `translateX(${x}%)`,
    //           }}
    //           onTransitionEnd={handleTransition}
    //         >
    //           <Link to={linkTo}>
    //             <Img className={slider.img} fluid={item.fluid} alt={item.title} />
    //           </Link>
    //         </div>
    //       </SwiperSlide>
    //     )
    //   })}
    // </Swiper>
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
            <Link to={linkTo}>
              <Img className={slider.img} fluid={item.fluid} alt={item.title} />
            </Link>
          </div>
        )
      })}
      {images.length > 1 && (
        <div>
          <div className={slider.goLeft} onClick={goLeft}>
            <span>
              <FiChevronLeft />
            </span>
          </div>
          <div className={slider.goRight} onClick={goRight}>
            <span>
              <FiChevronRight />
            </span>
          </div>
        </div>
      )}
      )
    </div>
  )
}

export default SliderSmall
