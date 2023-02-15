import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadingStates from '../../constants/loadingStates';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    // get access token
    // set token on localstorage
    // get user profile
    // handle errors, dispatch them
    // return user profile
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { dispatch }) => {
    // set auth loading pending
    // remove token from localstorage.removeItem('authToken');
    // set auth loading idle
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: loadingStates.IDLE,
    user: null,
    errors: null,
  },
  reducers: {
    setLoading: (state, action) => {
      if (state.loading !== action.payload) {
        state.loading = action.payload;
      }
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

export default authSlice.reducer;
