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

    return (
        <div
            className={`advice-item ${isActive && 'show'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>{isHovered ? description : advice}</p>
        </div>
    );
};

const Advice = () => {
    const [displayedAdviceIndex, setDisplayedAdviceIndex] = useState(0);

    const updateDisplayedAdvice = () => {
        setDisplayedAdviceIndex((prevIndex) => (prevIndex + 1) % reduceFootprints.length);
    };


    useEffect(() => {
        const intervalId = setInterval(updateDisplayedAdvice, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h3>10 Ways to Reduce Your Carbon Footprint</h3>
            {reduceFootprints.map((item, index) => (
                <AdviceDisplay
                    key={index}
                    advice={item.advice}
                    description={item.description}
                    isActive={index === displayedAdviceIndex}
                />
            ))}
        </div>
    );
};

export default Advice;
