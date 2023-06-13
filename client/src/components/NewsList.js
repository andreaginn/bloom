import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";

const NewsListing = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://climate-news-feed.p.rapidapi.com/page/1', {
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
                        'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
                    },
                    params: { limit: 9 }
                });

                const randomizedArticles = shuffleArray(response.data.articles);
                setArticles(randomizedArticles);
                console.log(randomizedArticles)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };

    return (
        <>
          <div className="col-start-3 col-end-7 place-self-center text-7xl pl-10 py-10 font-bold text-slate-700 mt-3 mr-3 justify-center" style={{ display: 'inline-block' }}>
            <span className="text-orange-400">Learn</span> more about how carbon emissions and climate change have effects on the world.
          </div>
          <div data-aos="fade-up" className="grid gap-4 md:pl-10 pt-3 lg:grid-cols-3 rounded-md">
            {articles.map(article => (
              <div key={article.id} data-aos="fade-up" className="h-full w-full rounded-lg shadow-md lg:max-w-sm">
                <Link to={article.url} className="block">
                  <img
                    className="object-cover w-full h-48 rounded-lg"
                    src={article.thumbnail}
                    alt="thumbnail"
                  />
                  <div className="p-4 flex flex-col items-center">
                    <h4 className="text-xl font-semibold text-gray-600">
                      {article.source}
                    </h4>
                    <p className="mb-8 leading-normal">
                      {article.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      );
    };

export default NewsListing;