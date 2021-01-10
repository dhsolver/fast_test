import axios from 'axios';
import { API_BASE, API_KEY } from '../config';

export const makeJsonRequestOptions = ({
  method,
  searchParam,
  headers,
  data,
  ...rest
}) => ({
  method,
  url: `${API_BASE}/?apikey=${API_KEY}&s=${searchParam}`,
  headers: {
    'Content-Type': 'application/json',
    ...headers
  },
  ...(data ? { data } : {}),
  ...rest
});

const request = options => axios(options);

export default request;
