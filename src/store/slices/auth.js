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

    // set auth token on localstorage
    localStorage.setItem(
      'auth',
      JSON.stringify({ token: accessToken, email: credentials.email }),
    );
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

export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async ({ email, token }) => {
    const profileRes = await operationsApi.getUserProfile(email, token);
    if (profileRes.statusCode !== 200) throw new Error(profileRes.errorMessage);

    const {
      docs: [profile],
    } = profileRes.payload;
    return profile;
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
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { setLoading, setAuthError } = authSlice.actions;
export default authSlice.reducer;
