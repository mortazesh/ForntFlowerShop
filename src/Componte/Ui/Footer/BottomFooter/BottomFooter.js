import React from 'react'

import img  from '../../../../Assat/Images/map.png'
import './BottomFooter.css'

const BottomFooter = () => {
    return(
        <div className="bottom">
            <div>
                <p>
                    شبکه‌های اجتماعی
                </p>
                <div className="icon">
                    <i className="fa fa-user"></i>
                    <i className="fa fa-user"></i>
                    <i className="fa fa-user"></i>
                    <i className="fa fa-user"></i>
                </div>
            </div>
            <div>
                <p>
                    بهترین ها با گل سرا
                </p>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
            <div>
                <img src={img} alt="Logo flower shop" title="Logo flower shop"/>
            </div>
        </div>
    )
}

export default BottomFooter