import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3010/',
  headers: {
    Origin: 'http://localhost:8080/api/v1/',
    Accept: 'appliccation/json',
    'Content-Type': 'application/json',
  },
});
