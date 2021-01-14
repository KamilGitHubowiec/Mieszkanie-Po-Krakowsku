import React from 'react'

import Footer from './footer'
import NavigationMenu from './navbar'

const Layout = (props) => {
  return (
    <div>
      <NavigationMenu />
        { props.children }
      <Footer />
    </div>
  )
}

export default Layout