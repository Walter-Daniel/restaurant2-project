import { login, logout } from '../slices/auth.slice';
import { loginUser, checkAuthTokenApi } from '../../services/auth.services';
import { Dispatch } from 'redux';

export const loginThunk = (credentials: { email: string; password: string }) => {
  return async(dispatch:Dispatch) => {
    const result = await loginUser(credentials);
    if(result.ok) {
      const { token, user } = result;
      localStorage.setItem('token', token);
      dispatch(login(user));
    } else {
      localStorage.clear();
      dispatch(logout(result.errorMessage));
    }
  }
};

export const checkAuthToken = () => {
  return async(dispatch:Dispatch) => {
    const token = localStorage.getItem('token');
    if(!token) return dispatch(logout('No hay token en header'));
    try {
      const result = await checkAuthTokenApi();
      if (result.ok) {
        const { token, user } = result;
        localStorage.setItem('token', token);
        dispatch(login(user));
      } else {
        localStorage.clear();
        dispatch(logout(result.errorMessage));
      }
    } catch (error) {
      // Manejar errores de renovación de token aquí
      console.log(error)
    }

  }
}