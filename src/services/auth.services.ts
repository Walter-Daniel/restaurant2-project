import { AxiosError, isAxiosError } from 'axios';
import { instance } from "../api/base.api";

interface User {
  fullName: string;
  email: string;
  _id: string;
  role: string;
}

interface ErrorResponse {
  message: string;
}

interface LoginResponseSuccess {
  ok: true;
  token: string;
  user: User;
}

interface LoginResponseError {
  ok: false;
  errorMessage: string;
}

type LoginResponse = LoginResponseSuccess | LoginResponseError;

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await instance.post<LoginResponseSuccess>('/auth/login', credentials);
    const { user, token } = response.data;
    return {
      ok: true,
      token: token,
      user: user
    };
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError.response?.data.message || 'An error occurred';
      return {
        ok: false,
        errorMessage: errorMessage
      };
    } else {
      return {
        ok: false,
        errorMessage: 'An error occurred'
      };
    }
  }
};
