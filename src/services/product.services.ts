import { AxiosResponse} from "axios";
import { productsApi } from "../api/products";
import { Product } from "../interfaces/product";


  
interface ResponseSuccess {
    ok: true;
    message: string;
    product: Product
}

export const uploadProductService = async(productToUpload: Omit<Product, '_id'>) =>{

    const token = localStorage.getItem('token');
    if(!token) throw new Error('No existe tóken');
    const response: AxiosResponse<ResponseSuccess> = await productsApi.createProduct(token, productToUpload);
    const { product } = response.data;
    return product
   

}