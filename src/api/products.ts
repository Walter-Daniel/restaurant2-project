import { Product } from "../interfaces/product";
import instance  from "./base.api";

export const productsApi = {
    getAll: function(){
        return instance.get('/products')
    },
    createProduct: function(token:string, product: Omit<Product, '_id'>){
        return instance.post('/products', product ,{
            headers:{
                'x-token': token
            },
        })
    }
};