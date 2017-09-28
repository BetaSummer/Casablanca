import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://115.28.164.123:8858',
  timeout: 1000,
});

export default api;
