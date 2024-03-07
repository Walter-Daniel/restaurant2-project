import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { productsApi } from "../api/products";
import { Product } from "../interfaces/product";

interface ErrorResponse {
    message: string;
}
  
interface ResponseSuccess {
    ok: true;
    message: string;
    product: Product
  }
  
interface ResponseError {
    ok: false;
    errorMessage: string;
}

type Response = ResponseSuccess | ResponseError;

export const uploadProductService = async(productToUpload: Omit<Product, '_id'>):Promise<Response> =>{

   try {
        const token = localStorage.getItem('token');
        if(!token) throw new Error('No existe tóken');
        const response: AxiosResponse<ResponseSuccess> = await productsApi.createProduct(token, productToUpload);
        const { ok, message, product } = response.data;
        return {
            ok, 
            message,
            product
        }
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
    
}