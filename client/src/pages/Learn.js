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
      <div className="grid grid-col-6 gap-4 px-5 pt-5">
        <div className="col-start-2 col-end-6 text-4xl sm:text-7xl font-bold text-slate-700 mt-5" style={{ display: 'inline-block' }}>
          <span className="text-orange-400">Learn</span> more about how carbon emissions and climate change have effects on the world.
        </div>
      </div>
      <NewsList />
      <div>
        {isLoading ? <OpenaiLoading /> : <Openai />}
      </div>
    </>
  );
};

export default Learn;
