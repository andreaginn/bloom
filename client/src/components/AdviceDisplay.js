import React, { useState, useEffect } from 'react';
import reduceFootprints from '../data/reduceFootprints';
import '../App.css';

<<<<<<< HEAD
const AdviceDisplay = ({ advice, description, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const currentadviceitem = document.getElementById("current-advice-item")
    currentadviceitem.textContent = advice
    // currentadviceitem.remove()

    return (
        <div
        // get elemenent by id 
    //set textcontent = reduceFootprints info
            className={`advice-item ${isActive && 'show'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p id="current-advice-item">{isHovered ? description : advice}</p>
        </div>
    );
};
=======
>>>>>>> main

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
<<<<<<< HEAD
        const intervalId = setInterval(updateDisplayedAdvice, 7000);
=======
        const intervalId = setInterval(updateDisplayedAdvice, 12000);
>>>>>>> main
        return () => clearInterval(intervalId);
    }, []);

    return (
<<<<<<< HEAD
        <div className="advice-box">
            <h3>Ways to Reduce Your Carbon Footprint</h3>
            <h4>Hover over items to learn more</h4>
            {/* create a <p> that is going to have an id */}
            <div className="advice-item-list">
            {reduceFootprints.map((item, index) => (
                <AdviceDisplay
                    key={index}
                    advice={item.advice}
                    description={item.description}
                    isActive={index === displayedAdviceIndex}
        
                />
                
            ))}</div>
=======
        <div className = "adviceDisplay">
                <p className = {fadeIn ? 'fade-in' : 'fade-out'}>{reduceFootprints[displayedAdviceIndex].advice}</p>
                <p className = {fadeIn ? 'fade-in' : 'fade-out'}>{reduceFootprints[displayedAdviceIndex].description}</p>
             
            
>>>>>>> main
        </div>
    );
};

export default Advice;