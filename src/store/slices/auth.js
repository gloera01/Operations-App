import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OperationsAPI from '../../api/operations';

import loadingStates from '../../constants/loadingStates';

const operationsApi = new OperationsAPI();

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    dispatch(setLoading(loadingStates.PENDING));
    // get access token
    const loginRes = await operationsApi.login(credentials);
    if (loginRes.statusCode !== 200) throw new Error(loginRes.errorMessage);

    const { accessToken } = loginRes.payload;

    // set token on localstorage
    localStorage.setItem('authToken', accessToken);
    return true;
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { dispatch }) => {
    dispatch(setLoading(loadingStates.PENDING));
    localStorage.removeItem('authToken');
    // TODO:
    // clear state (users, accounts, operations
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: loadingStates.IDLE,
    user: null,
    loggedIn: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      if (state.loading !== action.payload) {
        state.loading = action.payload;
      }
    },
    setAuthError: (state, action) => {
      if (state.error !== action.payload) {
        state.error = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.error = null;
      state.loading = loadingStates.IDLE;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.loggedIn = false;
      state.error = action.error.message;
      state.loading = loadingStates.IDLE;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loggedIn = false;
      state.user = null;
      state.error = null;
      state.loading = loadingStates.IDLE;
    });
  },
});

export const { setLoading, setAuthError } = authSlice.actions;
export default authSlice.reducer;
