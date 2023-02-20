import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Employee = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/employee-dashboard" />;
  }

  return (
    <div>
      <h2>Employee Login</h2>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button onClick={handleLogin}>Login</button>
      <Link to="/register"><p>Register</p></Link>  
    </div>
  );
};

export default Employee;
