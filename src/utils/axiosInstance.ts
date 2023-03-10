import axios, { HeadersDefaults } from 'axios';
import * as process from 'process';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

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
