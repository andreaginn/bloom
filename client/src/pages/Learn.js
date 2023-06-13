import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Openai from '../components/Openai';
import OpenaiLoading from '../components/Loading';


const Learn = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      <div>
        <NewsList />
        {isLoading ? <OpenaiLoading /> : <Openai />}
      </div>
    </>
  );
};

export default Learn;
