import React from 'react';

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <form>
        <label htmlFor="name">Naam:</label>
        <input type="text" name="name" />
        <label htmlFor="password">Wachtwoord:</label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
 )
}

export default AdminLogin;
