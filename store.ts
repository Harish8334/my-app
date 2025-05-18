import {configureStore} from '@reduxjs/toolkit';
import slice  from './slice';
import { reducer } from './reducer';
export const store = configureStore({
  reducer: {
    item:slice,
    login:reducer
  },


   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
  export type AppDispatch = typeof store.dispatch;
  