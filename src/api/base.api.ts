import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
    if(config.headers) {
        config.headers['x-token'] = localStorage.getItem('token'); 
      } 
    return config;
});

export default instance;