// src/App.js
import React, { useState, useEffect } from 'react';
import { getUsers } from './services/UserService';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users List</h1>

      {loading ? (
        <div className="loading">
          <p>Loading users...</p>
        </div>
      ) : (
        <ul className="user-list">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="user-card">
                <div className="user-info">
                  <h3 className="user-name">{user.name}</h3>
                  <p className="user-email">{user.email}</p>
                </div>
              </li>
            ))
          ) : (
            <p>No users found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
