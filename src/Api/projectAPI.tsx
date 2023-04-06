import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../constants';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});
