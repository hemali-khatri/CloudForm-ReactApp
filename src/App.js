// src/App.js
import React, { useState, useEffect } from 'react';
import { getUsers } from './services/UserService';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        // Use fallback users or empty array if API/db is not available
        setUsers();
        setError('Failed to load data from server. Showing fallback data.');
      } finally {
        setLoading(false);
      }
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
      ) : error ? (
        <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
          <p>{error}</p>
        </div>
      ) : null}

      {users.length > 0 ? (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default App;
