import axios from 'axios';

if (process.env.DEV) {
  axios.defaults.baseURL = 'http://localhost:3000';
}

export default axios;
