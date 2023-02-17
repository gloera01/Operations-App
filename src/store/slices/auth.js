import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadingStates from '../../constants/loadingStates';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    dispatch(setLoading(loadingStates.PENDING));
    // TODO:
    // get access token
    // set token on localstorage
    // get user profile
    // handle errors, dispatch them
    const userProfile = { ...credentials };
    return userProfile;
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { dispatch }) => {
    dispatch(setLoading(loadingStates.PENDING));
    // set auth loading pending
    // remove token from localstorage.removeItem('authToken');
    dispatch(setLoading(loadingStates.IDLE));
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: loadingStates.IDLE,
    user: null,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      if (state.loading !== action.payload) {
        state.loading = action.payload;
      }
    },
    setAuthError: (state, action) => {
      if (state.error !== action.payload) state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
