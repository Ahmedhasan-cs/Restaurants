import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';

interface AuthState {
  isAuthorized: boolean;
  userId?: number;
  loading: boolean;
  error: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthorized: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, _: PayloadAction<LoginPayload>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.isAuthorized = true;
      state.userId = state.userId;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const isAuthorized = (state: RootState) =>
  state.auth.isAuthorized || false;
export const inLoading = (state: RootState) =>
  state.auth.loading
export const hasError = (state: RootState) =>
  state.auth.error

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;