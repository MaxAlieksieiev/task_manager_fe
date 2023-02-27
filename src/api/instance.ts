import axios from 'axios';

export const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(function(config) {
  // TODO
  return config;
}, function(error) {
  return Promise.reject(error);
});

// Добавляем перехват ответов
instance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error?.response?.status === 401) {
    // TODO
  }
  if (error?.response?.status === 403) {
    // TODO
  }
  return Promise.reject(error);
});
