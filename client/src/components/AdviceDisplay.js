import React, { useState, useEffect } from 'react';
import reduceFootprints from '../data/reduceFootprints';
import '../App.css';

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

const Advice = () => {
    const [displayedAdviceIndex, setDisplayedAdviceIndex] = useState(0);

    const updateDisplayedAdvice = () => {
        setDisplayedAdviceIndex((prevIndex) => (prevIndex + 1) % reduceFootprints.length);
    };
    //in for loop
    // get elemenent by id 
    //set textcontent = reduceFootprints info
    //call to setInterval 

    useEffect(() => {
        const intervalId = setInterval(updateDisplayedAdvice, 7000);
        return () => clearInterval(intervalId);
    }, []);

    return (
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
        </div>
    );
};

export default Advice;