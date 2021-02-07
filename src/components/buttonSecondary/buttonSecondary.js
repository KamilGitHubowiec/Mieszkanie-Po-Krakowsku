import React from 'react'

import buttonSecondaryStyles from './buttonSecondary.module.scss'

const ButtonSecondary = ({ goTo }) => {
  return (
    <a className={buttonSecondaryStyles.linkToSection} href={`#${goTo}`}>
      {goTo}{' '}
    </a>
  )
}

export default ButtonSecondary
