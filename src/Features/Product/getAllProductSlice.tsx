import { createSlice } from '@reduxjs/toolkit';

import { getAllProducts } from '../../Api/projectAPI.js';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const initialState: {
  loading: boolean;
  error: string | null;
  data: Product[];
} = {
  loading: false,
  error: null,
  data: [],
};

export const getAllProductsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Đã xảy ra lỗi';
      state.data = [];
    });
  },
});

export default getAllProductsSlice.reducer;