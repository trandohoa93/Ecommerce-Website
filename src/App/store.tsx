import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import categoriesReducer from '../Features/Product/getAllCategoriesSlice';
import productReducer from '../Features/Product/getAllProductSlice';
import singleProduct from '../Features/Product/getSingleProductSlice';
import userLogin from '../Features/User/userLoginSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
    singleProduct: singleProduct,
    userLogin: userLogin,
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
