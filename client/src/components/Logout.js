import React, { useState } from 'react';
function Logout() {
    const handleLogout = () => {
      // Send a request to your backend to logout the user
      // Example code (replace with your actual API call):
      fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log(data);
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error(error);
        });
    };


export default Logout;