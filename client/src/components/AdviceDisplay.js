import React, { useState, useEffect } from 'react';
import reduceFootprints from '../data/reduceFootprints';
import '../App.css';


const Advice = () => {
    const [displayedAdviceIndex, setDisplayedAdviceIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const updateDisplayedAdvice = () => {
        setFadeIn(false);
        setTimeout(() => {
            setDisplayedAdviceIndex((prevIndex) => (prevIndex + 1) % reduceFootprints.length);
            setFadeIn(true)
        }, 2000);

    };
    //in for loop
    // get elemenent by id 
    //set textcontent = reduceFootprints info
    //call to setInterval 

    useEffect(() => {
        const intervalId = setInterval(updateDisplayedAdvice, 12000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className = "adviceDisplay">
                <p className = {`text-2xl text-slate-700 font-bold ${fadeIn ? 'fade-in' : 'fade-out'}`}>{reduceFootprints[displayedAdviceIndex].advice}</p>
                <p className = {`text-1xl text-slate-700  ${fadeIn ? 'fade-in' : 'fade-out'}`}>{reduceFootprints[displayedAdviceIndex].description}</p>
             
            
        </div>
    );
};

export default Advice;