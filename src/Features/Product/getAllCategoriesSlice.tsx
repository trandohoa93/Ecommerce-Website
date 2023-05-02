import { createSlice } from '@reduxjs/toolkit';

import { getAllCategories } from '@/Api/projectAPI';

const initialState: {
  loading: boolean;
  error: string | null;
  data: string[];
} = {
  loading: false,
  error: null,
  data: [],
};

export const getAllCategoriesSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state) => {
      state.loading = false;
      state.error = 'Đã xảy ra lỗi';
      state.data = [];
    });
  },
});

export default getAllCategoriesSlice.reducer;
