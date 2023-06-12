import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsListing = () => {
    const [value, setvalue] = useState([]);
    const api = async () => {
        let response = await fetch("https://newsapi.org/v2/everything?q=climate%20change&pageSize=16&apiKey=6ea2fc7e0ebc40b79c64d6a39e4cb672");
        let result = await response.json();
        console.log(result);
        console.log(result.articles);
        setvalue(result.articles);
    }
    useEffect(() => {
        api();

    }, []);

    return (
        <>
            <div className="col-start-3 col-end-7 place-self-center text-7xl pl-8 py-10 font-bold text-slate-700 mt-3 mr-3" style={{ display: 'inline-block' }}>
                <span className="text-orange-400">Learn</span> more about how carbon emissions and climate change has effect on the world.
            </div>
            <div className="grid gap-2 pt-3 lg:grid-cols-3 rounded-md">
                {value.filter(urlToImage => urlToImage.urlToImage !== null).map(a => (
                    <div className="h-full w-full rounded-lg shadow-md lg:max-w-sm">
                        <img
                            className="object-cover w-full h-48 rounded-lg"
                            src={a.urlToImage}
                            alt="thumbnail"
                        />
                        <div className="p-4 flex flex-col items-center">
                            <h4 className="text-xl font-semibold text-gray-600">
                                {a.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                                {a.description}
                            </p>
                        <div>
                            <Link className="btn-primary" as={Link} to={a.url}>Read more</Link>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default NewsListing;