import axios from 'axios';
import config from '../config';

class OperationsAPI {
  constructor() {
    this.#client = axios.create({
      baseURL: config.OPERATIONS_API_URL,
      headers: { 'Content-Type': 'application/json' },
    });
    this.#client.interceptors.response.use(this.#onSuccess, this.#onError);
  }

  #client = null;

  #onError(error) {
    if (error.response) {
      return error.response.data;
    }

    return {
      errorMessage: error.toJSON().message,
    };
  }
  #onSuccess(response) {
    return response.data;
  }

  #setAuthToken(token) {
    this.#client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async login(credentials) {
    return this.#client.post('/auth/login', credentials);
  }

  async getUserProfile(email, token) {
    this.#setAuthToken(token);
    return this.#client.get('/users', { params: { email } });
  }

  async getUsers(filters, token) {
    this.#setAuthToken(token);
    const params = {};
    if (filters.name) {
      params.name = filters.name;
    }
    return this.#client.get('/users', { params });
  }
}

export default OperationsAPI;
