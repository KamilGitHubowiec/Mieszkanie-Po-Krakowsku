import React from 'react'

import estateDetails from '../styles/estateDetails.module.scss'

const EstateDetails = ({ title, details }) => {
  return (
    <section className={estateDetails.section}>
      <div className={estateDetails.label}>{title}</div>
      <div className={estateDetails.detailsContainer}>
        {details.map(detail => {
          return (
            <div className={estateDetails.detailField}>
              <div className={estateDetails.detailFieldIcon}>{detail[0]}</div>
              <div className={estateDetails.detailFieldLabel}>{detail[1]}:</div>
              <div className={estateDetails.detailFieldValue}>{detail[2]}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EstateDetails
