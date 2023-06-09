import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Donate from './pages/Donate.js';
import Success from './pages/DonateSuccess.js';
import Preloader from './components/Preloader.js';
import Navbar from './components/Navbar.js';
import Learn from './pages/Learn.js';
import './App.css';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});
// Call setContext() to prepare the authLink for the ApolloClient constructor.
// Authlink will then be used for every request made by Apollo Client.
// We pass in a function to let authLink 
// (1) get the token from Local Storage, and
// (2) put the token in the header 
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path='/Success' element={<Success />} />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;