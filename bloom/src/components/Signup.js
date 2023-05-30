import React, { useState } from 'react';

function SignUp () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send a request to your backend to create a new user account
        // Example code (replace with your actual API call):
        fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
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
<h3>Sign Up</h3>
<form onSubmit={handleSubmit}>
<input 
type= "text"
placeholder="Name"
value={name}
onChange={ (e) => setName(e.target.value)}
/>
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
<button type="submit">Sign Up</button>
</form>
</div>
);
}

export default SignUp;