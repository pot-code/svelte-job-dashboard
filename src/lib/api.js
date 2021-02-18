import axios from 'axios';

// defaults
axios.defaults.baseURL = 'https://afternoon-brook-13749.herokuapp.com/';
axios.defaults.timeout = 3000;

// env
if (process.env.DEV) {
  axios.defaults.baseURL = 'http://localhost:3000';
}

export default axios;
