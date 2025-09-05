// src/services/UserService.js
import axios from 'axios';

//const apiUrl = 'http://localhost:3000/api/users';
const baseUrl = 'https://'+process.env.REACT_APP_API_URL || 'http://localhost:3000';
const apiUrl = `${baseUrl}/api/users`;
console.log("👉 React is calling API URL:", apiUrl);

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
