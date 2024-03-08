import { AxiosResponse} from "axios";
import { productsApi } from "../api/products";
import { Category, Product } from "../interfaces/product";
// import { Product } from "../interfaces/product";


  
interface ResponseSuccess {
    product: Product
}


export interface ProductLike {
    _id?: string;
    name: string;
    detail: string;
    price: number;
    category: Category;
    active: boolean;
    promo: boolean;
}
  
export const uploadProductService = async(productToUpload: ProductLike)=>{

    
    const token = localStorage.getItem('token');
    if(!token) throw new Error('No existe tóken');
    const response: AxiosResponse<ResponseSuccess> = await productsApi.createProduct(token, productToUpload);
    const { product } = response.data;
    return product
   

}