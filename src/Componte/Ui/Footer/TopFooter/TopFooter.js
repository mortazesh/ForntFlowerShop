import React from 'react';

import img  from '../../../../Assat/Images/logo.png'
import './TopFooter.css'

const TopFooter = () => {
    return(
        <div className="top">
            <img src={img} alt="Logo flower shop" title="Logo flower shop"/>
        </div>
    )
}

export default TopFooter