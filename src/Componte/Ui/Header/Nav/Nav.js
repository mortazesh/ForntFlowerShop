import React from 'react'

import NavItem from './NavItem/NavItem'
import Login from './Login/Login'

import './Nav.css'

const Nav = () => {
  return(
      <ul className='menu'>
        <NavItem href='/'>
          خانه
        </NavItem>
        <NavItem href='/shop'>
          فروشگاه
        </NavItem>
        <NavItem href='/gallery'>
          گالری
        </NavItem>
        <NavItem href='/'>
           پربازدید ترین
        </NavItem>
        <NavItem href='/context'>
           تماس با ما
        </NavItem>
        <NavItem href='/about'>
           درباره ی ما
        </NavItem>
        <Login/>
      </ul>
  )
}

export default Nav
