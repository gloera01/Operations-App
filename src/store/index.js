import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import usersReducer from './slices/user';

const singleReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: singleReducer,
});

export default store;
