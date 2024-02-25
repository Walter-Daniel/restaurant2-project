import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../slices/auth.slice";
import { loginUser } from "../../services/auth.services";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { dispatch }) => {
        try {
          const user = await loginUser(credentials);
          console.log(user)
          dispatch(login());
        } catch (error) {
          console.error(error);
          throw error;
        }
    }
)