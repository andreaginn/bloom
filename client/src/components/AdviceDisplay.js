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


    useEffect(() => {
        const intervalId = setInterval(updateDisplayedAdvice, 12000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className = "adviceDisplay">
                <p className = {fadeIn ? 'fade-in' : 'fade-out'}>{reduceFootprints[displayedAdviceIndex].advice}</p>
                <p className = {fadeIn ? 'fade-in' : 'fade-out'}>{reduceFootprints[displayedAdviceIndex].description}</p>
             
            
        </div>
    );
};

export default Advice;
