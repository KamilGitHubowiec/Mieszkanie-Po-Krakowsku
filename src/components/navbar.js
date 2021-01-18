import React from 'react'
import { Link } from 'gatsby'

import navbar from '../styles/navbar.module.scss'

const NavigationMenu = () => {
  return (
    <nav className={navbar.nav}>
      <Link to="/">Logo</Link>

      <div className={navbar.links}>
        <div className={navbar.link}>
          <Link to="/estates">NIERUCHOMOŚCI</Link>
        </div>

        <div className={navbar.link}>
          <Link to="/about">O NAS</Link>
        </div>

        <div className={navbar.link}>
          <Link to="/contact">KONTAKT</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationMenu
