import {configureStore} from '@reduxjs/toolkit';
import showLoadingModalReducer from './loadingSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    showLoadingModalReducer,
    userReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
