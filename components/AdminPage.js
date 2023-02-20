import React, { useState } from 'react';
import { Link } from '@reach/router';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <p>Please Log In To Access Admin Area</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Username:
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Log In</button>
      </form>
      <Link to="/">Go Back To Homepage</Link>
    </div>
  );
};

export default AdminLoginPage;
