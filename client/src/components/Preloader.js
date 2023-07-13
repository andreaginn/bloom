import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { preLoaderAnim } from '../animations';
import animationData from '../fjO3sek7ZT.json';
import '../styles/preloader.css';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    }, []);

    return (
    <div className="preloader">
        <h1 className="logo-text">B<span>
        <div className="animation-container">
        <Lottie  className = "preloader" options={defaultOptions} />
    </div>
        </span>oom</h1>
    </div>
    )
}

export default Preloader;