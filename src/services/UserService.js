// src/services/UserService.js
import axios from 'axios';

// ✅ Decide base URL depending on environment
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL || '/api' // CloudFront or API Gateway handles /api
    : 'http://localhost:3000/api'; // Local dev backend

console.log("👉 React is calling API URL:", baseUrl);

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching users:', error.message);
    return [];
  }
};
