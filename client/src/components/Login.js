import React, { useState } from 'react';

function LogIn () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send a request to your backend to authenticate the user
        // Example code (replace with your actual API call):
        fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
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
    


return (
<div>
<h3>Log In</h3>
<form onSubmit={handleSubmit}>
<input 
type= "email"
placeholder="Email"
value={email}
onChange={ (e) => setEmail(e.target.value)}
/>
<input 
type= "password"
placeholder="Password"
value={password}
onChange={ (e) => setPassword(e.target.value)}
/>
<button type="submit">Log In</button>
</form>
</div>
);
}

export default LogIn;