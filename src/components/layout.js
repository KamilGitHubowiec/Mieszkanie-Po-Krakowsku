import React from 'react'
import '../styles/index.scss'

import Footer from './footer'
import NavigationMenu from './navbar'

const Layout = props => {
  return (
    <div>
      <NavigationMenu />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
