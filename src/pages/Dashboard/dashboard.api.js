import axios from 'axios';

export default {
  getAcquisitions: () => axios.get('/api/job/acquisitions').then((res) => res.data),
  getActive: () => axios.get('/api/job/active').then((res) => res.data),
};
