import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const NavigationMenu = () => {
  return (
    <Container fluid>
      <Navbar sticky='top'>
        <Link to='/'>Strona główna</Link>

        <Button variant='light'>
          <Link to='/contact'>Kontakt</Link>
        </Button>

        <Button variant='light'>
          <Link to='/about'>O nas</Link>
        </Button>

        <Button variant='light'>
          <Link to='/services'>Usługi</Link>
        </Button>
      </Navbar>
    </Container>
  )
}

export default NavigationMenu