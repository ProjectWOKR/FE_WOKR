import axios from 'axios';

// create BASE API
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

// API TOKEN Intercepters
api.interceptors.request.use(config => {
  const access_token = localStorage.getItem('accesstoken');

  if (access_token) {
    // config.headers['access-token'] = `Bearer ${access_token}`;
    config.headers['accessToken'] = `Bearer ${access_token}`;
  }

  return config;
});

export default api;
