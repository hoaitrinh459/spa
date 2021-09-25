import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-API-KEY': process.env.REACT_APP_KEY,
  },
});
