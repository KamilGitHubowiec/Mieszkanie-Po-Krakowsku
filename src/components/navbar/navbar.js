import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'gatsby'

import navbarStyles from './navbar.module.scss'
import NavbarSideDrawer from '../navbarSideDrawer/navbarSideDrawer'
import Backdrop from '../backdrop/backdrop'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const openSideDrawer = () => {
    setShow(true)
  }
  const closeSideDrawer = () => {
    setShow(false)
  }

  return (
    <nav className={`${navbarStyles.nav} ${navbarStyles.pdngHz}`}>
      <Link className={navbarStyles.logo} to="/">
        Strona Główna
      </Link>

      <div className={navbarStyles.links}>
        <Link className={navbarStyles.link} to="/wyszukiwarka">
          WYSZUKIWARKA
        </Link>

        {/* <Link className={navbarStyles.link} to="/about">
          O NAS
        </Link>

        <Link className={navbarStyles.link} to="/contact">
          KONTAKT
        </Link> */}
      </div>

      <div className={navbarStyles.smallScreenNav}>
        <FiMenu className={navbarStyles.burgerMenu} onClick={openSideDrawer} />
        <NavbarSideDrawer show={show} closeSideDrawer={closeSideDrawer} />
        <Backdrop show={show} click={closeSideDrawer} />
      </div>
    </nav>
  )
}

export default Navbar
