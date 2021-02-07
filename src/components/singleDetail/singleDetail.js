import React from 'react'

import singleDetailStyles from './singleDetail.module.scss'

const SingleDetail = ({ detail }) => {
  return (
    <div className={singleDetailStyles.detailField}>
      <div className={singleDetailStyles.detailFieldIcon}>{detail[0]}</div>
      <div className={singleDetailStyles.detailFieldLabel}>{detail[1]}:</div>
      <div className={singleDetailStyles.detailFieldValue}>{detail[2]}</div>
    </div>
  )
}

export default SingleDetail
