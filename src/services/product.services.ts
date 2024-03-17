import { AxiosResponse} from "axios";
import { productsApi } from "../api/products";
import { Product } from "../interfaces/product";

  
interface ResponseSuccess {
    product: Product
}

export interface ProductLike {
    _id?: string;
    name: string;
    detail: string;
    price: number;
    category: string;
    active: boolean;
    promo: boolean;
}
  
export const uploadProductService = async(productToUpload: ProductLike)=>{

    const token = localStorage.getItem('token');
    if(!token) throw new Error('No existe token');
    const response: AxiosResponse<ResponseSuccess> = await productsApi.createProduct(token, productToUpload);
    const { product } = response.data;
    console.log({product}, 'desde upload')
    return product
   
}