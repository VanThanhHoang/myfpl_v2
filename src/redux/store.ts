import {configureStore} from '@reduxjs/toolkit';
import showLoadingModalReducer from './loadingSlice';
const store = configureStore({
  reducer: {
    showLoadingModalReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
