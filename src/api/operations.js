import axios from 'axios';

import config from '../config';

const onSuccess = (response) => response.data;

const onError = (error) => {
  if (error.response) {
    return error.response.data;
  }

  return {
    errorMessage: error.toJSON().message,
  };
};

const operations = axios.create({
  baseURL: config.OPERATIONS_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

operations.interceptors.response.use(onSuccess, onError);

export default operations;
