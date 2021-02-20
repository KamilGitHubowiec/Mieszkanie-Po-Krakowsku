import React from 'react'

import backdropStyles from './backdrop.module.scss'

const Backdrop = ({ show, click }) => {
  let backdropAnimation = `${backdropStyles.backdrop}`
  if (show) {
    backdropAnimation = `${backdropStyles.backdrop} ${backdropStyles.open}`
  }
  return <div className={backdropAnimation} onClick={click}></div>
}

export default Backdrop
