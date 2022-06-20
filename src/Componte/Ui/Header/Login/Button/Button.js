import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = (props) => {
  return(
    <Link to={props.href} className='hreflogin'>
      {props.children}
    </Link>
  )
}

export default Button
