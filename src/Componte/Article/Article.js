import react from 'react'

import ArticleText from './ArticleText/ArticleText'

import './Article.css'

const Article = () => {
    return(
        <section className="Article_container">
            <ArticleText/>
        </section>
    )
}

export default Article