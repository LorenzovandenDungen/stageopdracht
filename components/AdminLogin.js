import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AdminLogin = () => (
  <Layout>
    <h2>Admin Login</h2>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role">
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div>
        <input type="submit" name="submit" value="Submit"/>
      </div>
    </form>
    <Link href="/createUser"><a>Create User</a></Link>
  </Layout>
);
export default AdminLogin;
