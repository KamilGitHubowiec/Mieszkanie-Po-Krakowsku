import React from 'react'
import { Link } from 'gatsby'

import navbar from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <Link to="/">Logo</Link>

      <div className={navbar.links}>
        <Link className={navbar.link} to="/wyszukiwarka">
          WYSZUKIWARKA
        </Link>

        <Link className={navbar.link} to="/about">
          O NAS
        </Link>

        <Link className={navbar.link} to="/contact">
          KONTAKT
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
