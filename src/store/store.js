import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/profileReducer';
import hospitalReducer from './reducers/hospitalReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hospitals: hospitalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
