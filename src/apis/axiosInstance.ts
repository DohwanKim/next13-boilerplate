import axios, { HeadersDefaults } from 'axios';

const axiosClient = axios.create();

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = 'https://api.example.org/';

type headers = {
  'Content-Type': string;
  Accept: string;
  Authorization: string;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as headers & HeadersDefaults;

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    return Promise.reject(err);
  },
);

export default axiosClient;