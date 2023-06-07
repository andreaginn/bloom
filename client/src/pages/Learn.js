import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import OAI from '../components/Openai';

const Learn = () => {

  return (
    <>
      <div>
        <NewsList />
        <OAI />
      </div>
    </>
  )
}

export default Learn;
