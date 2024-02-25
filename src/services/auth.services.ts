import { instance } from "../api/base.api";

export const loginUser = async (credentials: {
    email: string;
    password: string;
  }) => {

    try {
        const response =  instance.post('/auth/login', credentials)
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
      throw new Error('Login failed');
    }
    
  };
  