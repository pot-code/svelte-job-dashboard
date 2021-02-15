import axios from 'axios';

export default {
  getActivities: () => axios.get('/api/profile/activities').then((res) => res.data),
  getMessages: () => axios.get('/api/profile/messages').then((res) => res.data),
  getProfile: () => axios.get('/api/profile').then((res) => res.data),
};
