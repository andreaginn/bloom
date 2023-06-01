import React from 'react';
import Home from './pages/Home.js';
import Preloader from './components/Preloader.js';
import './App.css';

function App() {
  return (
    <>
    <Preloader />
    <Home />
    </>
  );
}

export default App;