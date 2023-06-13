import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

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
        Aos.init({ duration: 2500});
    }, []);

    return (
        <>
            <div className="col-start-3 col-end-7 place-self-center text-7xl pl-10 py-10 font-bold text-slate-700 mt-3 mr-3 justify-center" style={{ display: 'inline-block' }}>
                <span className="text-orange-400">Learn</span> more about how carbon emissions and climate change has effect on the world.
            </div>
            <div data-aos="fade-up" className="grid gap-4 md:pl-10 pt-3 lg:grid-cols-3 rounded-md">
                {value.filter(urlToImage => urlToImage.urlToImage !== null).map(a => (
                    <div data-aos="fade-up" className="h-full w-full rounded-lg shadow-md lg:max-w-sm">
                        <img
                            className="object-cover w-full h-48 rounded-lg"
                            src={a.urlToImage}
                            alt="thumbnail"
                        />
                        <div className="p-4 flex flex-col items-center">
                            <h4 className="text-xl font-semibold text-gray-600">
                                {a.title}
                            </h4>
                            <p className="mb-8 leading-normal">
                                {a.description}
                            </p>
                        <div className = "pt-5 absolute bottom-4">
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