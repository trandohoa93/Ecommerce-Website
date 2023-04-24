import { createSlice } from '@reduxjs/toolkit';

import { getSingleProduct } from '../../Api/projectAPI';

export interface ProductType {
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
  data: ProductType;
} = {
  loading: false,
  error: null,
  data: {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  },
};

export const getSingleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Đã xảy ra lỗi';
    });
  },
});

export default getSingleProductSlice.reducer;
