import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import productReducer from '../Features/Product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
