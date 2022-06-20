import React from 'react'

import Header from '../../Componte/Ui/Header/Header'
import ArticleSingle from '../../Componte/Article/Article'
import Footer from '../../Componte/Ui/Footer/Footer'

import './Article.css'

const Article = () => {
    return (
        <>
            <Header />
            <ArticleSingle/>
            <Footer />
        </>
    )
}

export default Article