import React from 'react'

import Nav from './Nav/Nav'
import Login from './Login/Login'

import './Header.css'

const Header = () => {
  return(
    <header className="header_container">
      <Nav/>
      <Login/>
    </header>
  )
}

export default Header
