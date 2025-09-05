// src/services/UserService.js
import axios from 'axios';

//const apiUrl = 'http://localhost:3000/api/users';
const apiUrl =
  process.env.NODE_ENV === 'production'
    ? '/api/users'
    : 'http://localhost:3000/api/users';
console.log("👉 React is calling API URL:", apiUrl);
console.log("👉 Running in env:", process.env.NODE_ENV);

export const getUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
