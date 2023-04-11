import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../constants';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id: string | undefined) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  },
);

export const getAllCategories = createAsyncThunk(
  'products/getAllCategories',
  async () => {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  },
);
