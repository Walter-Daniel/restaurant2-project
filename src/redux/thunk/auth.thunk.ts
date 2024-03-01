import { login, logout } from '../slices/auth.slice';
import { loginUser } from '../../services/auth.services';
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
