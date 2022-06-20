import React from 'react'

import TopFooter from './TopFooter/TopFooter'
import BottomFooter from './BottomFooter/BottomFooter'

import './Footer.css'

const Footer = () => {
  return(
    <footer className='conatiner-fotter'>
        <TopFooter/>
        <BottomFooter/>
    </footer>
  )
}

export default Footer
