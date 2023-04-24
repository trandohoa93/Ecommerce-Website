import { createSlice } from '@reduxjs/toolkit';

import { userLogin } from '../../Api/projectAPI';

const initialState: {
  loading: boolean;
  error: string | null;
  data: any;
  isLogin: boolean;
} = {
  loading: false,
  error: null,
  data: {
    token: '',
  },
  isLogin: false,
};

export const userLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
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

export const { login, logout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
