// src/services/UserService.js
import axios from 'axios';

//const apiUrl = 'http://localhost:3000/api/users';
const apiUrl = process.env.API_URL || 'http://localhost:3000/api/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
