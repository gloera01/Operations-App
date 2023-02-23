import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OperationsAPI from '../../api/operations';

const operationsAPI = new OperationsAPI();

export const fetchUsers = createAsyncThunk('users/fetch', async (filters) => {
  // TODO: set loading state
  const token = localStorage.getItem('token');
  const getResponse = await operationsAPI.getUsers(filters, token);
  if (getResponse.statusCode !== 200) throw new Error(getResponse.errorMessage);

  return getResponse.payload;
});

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    docs: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.docs = payload.docs;
    });
  },
});

export default usersSlice.reducer;
