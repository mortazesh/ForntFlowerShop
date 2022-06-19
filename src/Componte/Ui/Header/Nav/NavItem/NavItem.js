import React from 'react'
import { Link } from 'react-router-dom'

import './NavItem.css'

const NavItem = (props) => {
  return(
    <li>
      <Link to={props.href}>
        {props.children}
      </Link>
    </li>
  )
}

export default NavItem
