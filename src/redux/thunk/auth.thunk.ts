import { checking, login, logout } from '../slices/auth.slice';
import { loginUser, checkAuthTokenApi } from '../../services/auth.services';
import { Dispatch } from 'redux';

export const startLogin = (credentials: { email: string; password: string }) => {
  return async(dispatch:Dispatch) => {
    dispatch(checking());
    const result = await loginUser(credentials);
    if(result.ok) {
      const { token, user } = result;
      localStorage.setItem('token', token);
      dispatch(login({user}));
    } else {
      localStorage.clear();
      const errorMessage = result.errorMessage
      dispatch(logout({errorMessage}));
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
        dispatch(login({user}));
      } else {
        localStorage.clear();
        dispatch(logout(result.errorMessage));
      }
    } catch (error) {
      dispatch(logout('Error al renovar el token'));
    }
  }
}

export const startLogout = () => {
    return async(dispatch:Dispatch) => {
      localStorage.clear();
      dispatch(logout('Cierre de sesión'));
    }
}