import React from 'react'

import estateDetailsSectionStyles from './estateDetailsSection.module.scss'

const EstateDetailsSection = props => {
  return (
    <section className={estateDetailsSectionStyles.section}>
      <span id={props.goToId}></span>
      <div className={estateDetailsSectionStyles.label}>{props.title}</div>
      <div className={estateDetailsSectionStyles.detailsContainer}>{props.children}</div>
    </section>
  )
}

export default EstateDetailsSection
