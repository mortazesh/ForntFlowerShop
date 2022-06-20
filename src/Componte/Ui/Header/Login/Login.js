import React from 'react'

import Button from './Button/Button'

import './Login.css'

const Login = () => {
  return(
    <div className='loginheader'>
      <Button href='/'>
        ثبت نام
      </Button>/
      <Button href='/'>
        ورود
      </Button>
    </div>
  )
}

export default Login
