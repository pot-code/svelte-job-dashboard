import axios from 'axios';

// defaults
axios.defaults.timeout = 3000;

// env
if (process.env.DEV) {
  axios.defaults.baseURL = 'http://localhost:3000';
}

export default axios;
