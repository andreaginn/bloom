import React from 'react';

const NewsArticle = ({ title, description, url, urlToImage }) => {
return(
    <div className="news">
    <div className='newsArticle'>
        <img className='newsimage' src={urlToImage} alt={urlToImage} />
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
    </div>
</div>
)
}

export default NewsArticle;