import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Openai from '../components/Openai';

const Learn = () => {

  return (
    <>
      <div>
        <NewsList />
        <Openai />
      </div>
    </>
  )
}

export default Learn;
