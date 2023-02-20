import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Here you can import the Invites, Users and Trainings components
import Invites from // insert path here
import Users from // insert path here
import Trainings from // insert path here

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
​
    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <h2>Admin Login</h2>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={handleLogin}>Login</button>
            <Link to="/register"><p>Register</p></Link>  
            <Invites />
            <Users />
            <Trainings />
            <Grades />
        </div>
    );
};

export default Admin;
