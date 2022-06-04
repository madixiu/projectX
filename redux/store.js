
// import counterReducer from './counterSlice';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// REDUX
import {configureStore} from '@reduxjs/toolkit';
import { themeSlice } from './themSlice';


export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware:getDefaultMiddleware => getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});


export default store;