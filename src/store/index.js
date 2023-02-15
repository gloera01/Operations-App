import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/auth';

const singleReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: singleReducer,
});

export default store;
