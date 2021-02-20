import React from 'react'
import { Link } from 'gatsby'
import { IoMdClose } from 'react-icons/io'
import { FiChevronRight } from 'react-icons/fi'

import navbarSideDrawerStyles from './navbarSideDrawer.module.scss'

const NavbarSideDrawer = ({ show, closeSideDrawer }) => {
  let sideDrawerAnimation = `${navbarSideDrawerStyles.sideDrawerWrapper}`
  if (show) {
    sideDrawerAnimation = `${navbarSideDrawerStyles.sideDrawerWrapper} ${navbarSideDrawerStyles.open}`
  }
  return (
    <div className={sideDrawerAnimation}>
      <IoMdClose className={navbarSideDrawerStyles.closeButton} onClick={closeSideDrawer} />

      <Link to="/" onClick={closeSideDrawer}>
        <span>Strona Główna</span>
        <FiChevronRight />
      </Link>

      <Link to="/wyszukiwarka" onClick={closeSideDrawer}>
        <span>Wyszukiwarka</span>
        <FiChevronRight />
      </Link>

      {/* <Link to="/about" onClick={closeSideDrawer}>
        <span>O Nas</span>
        <FiChevronRight />
      </Link>

      <Link to="/contact" onClick={closeSideDrawer}>
        <span>Kontakt</span>
        <FiChevronRight />
      </Link> */}
    </div>
  )
}

export default NavbarSideDrawer
