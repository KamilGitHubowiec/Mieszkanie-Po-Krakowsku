import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Strona główna</Link>
      <Link to='/contact'>Kontakt</Link>
      <Link to='/about'>O nas</Link>
      <Link to='/services'>Usługi</Link>
    </div>
  )
}

export default Navbar