import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';

const NewsListing = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=climate%20change&pageSize=19&apiKey=6ea2fc7e0ebc40b79c64d6a39e4cb672');
            setArticles(response.data.articles)
            console.log(response)
        }
        getArticles()
    },[]);
  // eslint-disable-next-line no-undef
  return (
    <div>
        {articles.filter(urlToImage => urlToImage.urlToImage !== null).map(article => {
            return (
                <NewsArticle
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage} 
            />
            )
        })}
    </div>
  )
}

export default NewsListing;