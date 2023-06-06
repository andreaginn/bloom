import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import reduceFootprints from '../data/reduceFootprints';

const AdviceDisplay = ({ advice }) => {
  return <p>{advice}</p>;
};

const Learn = () => {

  const [displayedAdvice, setDisplayedAdvice] = useState([]);

  // Logic to select random advice
  const selectRandomAdvice = () => {
    const randomAdvice = [];
    const reduceFootprintsCopy = [...reduceFootprints];

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * reduceFootprintsCopy.length);
      randomAdvice.push(reduceFootprintsCopy.splice(randomIndex, 1)[0]);
    }

    setDisplayedAdvice(randomAdvice);
  };

  // Call selectRandomAdvice on component mount
  useEffect(() => {
    selectRandomAdvice();
  }, []);


  return (
    <>
      <div>
        <NewsList />
      </div>
      <div>
        <h3>10 Ways to Reduce Your Carbon Footprint</h3>
        {displayedAdvice.map((advices, index) => (
          <AdviceDisplay key={index} advice={advices.advice} />
        ))}
      </div>
    </>
  )
}

export default Learn;
