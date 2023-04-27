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

interface Filter {
  text: string;
  category: string;
  min_price: number;
  max_price: number;
  price: number;
}

const initialState: {
  loading: boolean;
  error: string | null;
  data: Product[];
  searchItem: Product[];
  grid_view: boolean;
  sort: string;
  filters: Filter;
} = {
  loading: false,
  error: null,
  data: [],
  searchItem: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

export const getAllProductsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchItem: (state, action) => {
      if (action.payload)
        state.searchItem = state.data.filter((item) => {
          return item.title.toLowerCase().includes(action.payload);
        });
      else {
        state.searchItem = [];
      }
    },
    setGridView: (state) => {
      state.grid_view = true;
    },
    setListView: (state) => {
      state.grid_view = false;
    },
  },
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

export const { searchItem } = getAllProductsSlice.actions;

export default getAllProductsSlice.reducer;
