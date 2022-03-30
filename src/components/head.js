import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from "../images/favicon.ico";

const Head = ({ title }) => {
  return (
    <Helmet title={`${title}`}>
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

export default Head
