import React from 'react'
import '../styles/index.scss'

import Footer from './footer/footer'
import Navbar from './navbar/navbar'

const Layout = props => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
