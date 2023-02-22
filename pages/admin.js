
import React, { useState } from 'react';

const AdminPage = () => {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleNewUserSubmit = (event) => {
    event.preventDefault();
    // TODO: Send POST request to server to save new user
  };

  const handleExistingUserChange = (event) => {
    // TODO: Send PATCH request to server to update user role
  };

  const handleSendInvitationClick = (event, userId) => {
    event.preventDefault();
    // TODO: Send POST request to server to send invitation to selected training
  };

  const handleImportUsersClick = (event) => {
    event.preventDefault();
    // TODO: Import users from CSV file
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Add New User</h2>
      <form onSubmit={handleNewUserSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newUser.name} onChange={(event) => setNewUser({ ...newUser, name: event.target.value })} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={newUser.email} onChange={(event) => setNewUser({ ...newUser, email: event.target.value })} />
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" value={newUser.role} onChange={(event) => setNewUser({ ...newUser, role: event.target.value })} />
        <
button type="submit">Add User</button>
</form>

php
Copy code
  <h2>Existing Users</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Change Role</th>
        <th>Send Invitation</th>
      </tr>
    </thead>
    <tbody>
      {existingUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <select value={user.role} onChange={(event) => handleExistingUserChange(event, user.id)}>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Company">Company</option>
            </select>
          </td>
          <td>
            <button onClick={(event) => handleSendInvitationClick(event, user.id)}>Send Invitation</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <h2>Import Users</h2>
  <form onSubmit={handleImportUsersClick}>
    <input type="file" accept=".csv" />
    <button type="submit">Import Users</button>
  </form>

  <h2>Send Invitation</h2>
  <label htmlFor="training">Select Training:</label>
  <select id="training" value={selectedTraining} onChange={(event) => setSelectedTraining(event.target.value)}>
    <option value="">Select a Training</option>
    <option value="training1">Training 1</option>
    <option value="training2">Training 2</option>
    <option value="training3">Training 3</option>
  </select>
  <label htmlFor="expiryDate">Expiry Date:</label>
  <input type="date" id="expiryDate" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} />
  <button>Send Invitation</button>
</div>
);
};

export default AdminPage;