import React from 'react';
import '../styles/newsarticle.css'
import Button from './Button.js';

const NewsArticle = ({ title, description, url, urlToImage }) => {
return(
    <div className="news">
    <div className='newsArticle'>
        <h3>{title}</h3>
        <img className='newsimage' src={urlToImage} alt={urlToImage} />
        <p className='description'>{description}</p>
        <a href={url} className='button-news'>
        <Button content={"Read more"} />
        </a>
    </div>
</div>
)
}

export default NewsArticle;