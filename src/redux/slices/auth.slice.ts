import { createSlice } from '@reduxjs/toolkit';

type User = {
  email: string | null;
  fullName: string | null;
  id: string | null;
  role: string | null;
};

type AuthState = {
  status: 'non-authenticated' | 'checking' | 'authenticated';
  user: User;
  errorMessage: string | undefined;
};

const initialState: AuthState= {
  status: 'checking',
  user: {
    email: null,
    fullName: null,
    id: null,
    role: null
  },
  errorMessage: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checking: (state) => {
      state.status = 'checking';
      state.user= {
        email: null,
        fullName: null,
        id: null,
        role: null
      };
      state.errorMessage = undefined;
    },
    login: (state, {payload})  => {
        state.status = 'authenticated',
        state.user = payload.user,
        state.errorMessage = undefined
    },
    logout: (state, {payload})  => {
      state.status = 'non-authenticated',
      state.user = {
        email: null,
        fullName: null,
        id: null,
        role: null
      },
      state.errorMessage = payload.errorMessage
    },
   },
})

export const { login, logout, checking } = authSlice.actions