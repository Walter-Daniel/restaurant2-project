import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  email: string | null;
  fullName: string | null;
  id: string | null;
  role: string | null;
  errorMessage: string | null;
}
const initialState: AuthState= {
  isAuth: false,
  email: null,
  fullName: null,
  id: null,
  role: null,
  errorMessage: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload})  => {
        state.isAuth = true,
        state.id = payload._id,
        state.fullName = payload.fullName,
        state.email = payload.email,
        state.role = payload.role,
        state.errorMessage = null
    },
    logout: (state, {payload})  => {
        state.isAuth = false,
        state.id = null,
        state.fullName = null,
        state.email = null,
        state.role = null
        state.errorMessage = payload.errorMessage
    },
   },
})

export const { login, logout } = authSlice.actions