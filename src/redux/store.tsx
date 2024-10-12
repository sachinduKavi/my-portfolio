import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './project-slice'

const store = configureStore({
  reducer: {
    project: projectSlice, // Add your slice reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;