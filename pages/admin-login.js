import React, { useState, useEffect } from 'react'
import { signupAdmin } from '../actions'

const AdminLogin = () => {
  const [memberId, setMemberId] = useState(""); 
  const [password, setPassword] =useState(""); 

  useEffect(() => {
     signupAdmin({ memberId, password });  
  }, [memberId, password]);

  return (
    <form>
      <label>Member id:</label>
      <input type="text" onChange={(e) => setMemberId(e.target.value)} />
      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log In</button>
    </form>
  )
}

export default AdminLogin; 
