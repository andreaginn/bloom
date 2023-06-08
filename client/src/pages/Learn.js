import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import OAI from '../components/Openai';

const Learn = () => {

  return (
    <div className="learn-body">
    <>
      <div>
        <NewsList />
        <OAI />
      </div>
    </>
    </div>
  )
}

export default Learn;
