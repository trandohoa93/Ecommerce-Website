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
  filtered_products: Product[];
  all_products: Product[];
  searchItem: Product[];
  grid_view: boolean;
  sort: string;
  filters: Filter;
} = {
  loading: false,
  error: null,
  filtered_products: [],
  all_products: [],
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
        state.searchItem = state.all_products.filter((item) => {
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
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    sortProduct: (state) => {
      let tempProducts = [...state.filtered_products];
      if (state.sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (state.sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (state.sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      if (state.sort === 'name-z') {
        tempProducts = tempProducts.sort((b, a) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      state.filtered_products = tempProducts;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, [action.payload.name]: action.payload.value };
    },
    filterProducts: (state) => {
      const { text, category, price } = state.filters;
      let tempProducts = [...state.all_products];
      // filtering
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.title.toLowerCase().startsWith(text);
        });
      }
      // category
      if (category !== 'all') {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }
      // price
      tempProducts = tempProducts.filter((product) => product.price < price);
      state.filtered_products = tempProducts;
    },
    clearFilters: (state) => {
      state.filters = {
        ...state.filters,
        text: '',
        category: 'all',
        price: state.filters.max_price,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.all_products = [];
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      const maxPrice = Math.max(...action.payload.map((p: any) => p.price));
      state.loading = false;
      state.error = null;
      state.all_products = action.payload;
      state.filtered_products = action.payload;
      state.filters.max_price = maxPrice;
      state.filters.price = maxPrice;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
      state.error = 'Đã xảy ra lỗi';
      state.all_products = [];
    });
  },
});

export const {
  searchItem,
  setGridView,
  setListView,
  sortProduct,
  updateSort,
  updateFilters,
  filterProducts,
  clearFilters,
} = getAllProductsSlice.actions;

export default getAllProductsSlice.reducer;
