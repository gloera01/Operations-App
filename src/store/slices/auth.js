import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    errors: null,
  },
  extraReducers: {},
});

export default authSlice.reducer;
