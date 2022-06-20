import React from 'react'

import NavItem from './NavItem/NavItem'

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
        <NavItem href='/Article'>
          مقالات
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
      </ul>
  )
}

export default Nav
