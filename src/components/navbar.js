import React from 'react'
import { Link } from 'gatsby'

import navbar from '../styles/navbar.module.scss'

const NavigationMenu = () => {
  return (
    <nav className={navbar.navbar} >
      <Link to='/'>Strona główna</Link>

      <Link to='/estates'>Nieruchomości</Link>

      <Link to='/about'>O nas</Link>

      <Link to='/contact'>Kontakt</Link>
    </nav>
  )
}

export default NavigationMenu