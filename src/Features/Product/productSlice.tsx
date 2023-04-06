import { createSlice } from '@reduxjs/toolkit';

import { getAllProducts } from '../../Api/projectAPI.js';

const initialState = {
  loading: false,
  error: null as string | null,
  data: [],
};

export const productSlice = createSlice({
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

export default productSlice.reducer;
