import React, { useState } from 'react';

function LogIn () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
  
        fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
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