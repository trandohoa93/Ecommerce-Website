import { createSlice } from '@reduxjs/toolkit';

import { userLogin } from '../../Api/projectAPI';

const initialState: {
  loading: boolean;
  error: string | null;
  data: any;
} = {
  loading: false,
  error: null,
  data: {
    token: '',
  },
};

export const userLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = {
        token: '',
      };
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
      state.error = 'Đã xảy ra lỗi';
      state.data = {
        token: '',
      };
    });
  },
});

export default userLoginSlice.reducer;
