// import { Product } from "../interfaces/product";
import { ProductLike } from "../services/product.services";
import instance  from "./base.api";



export const productsApi = {
    getAll: function(filterURL: string){
        return instance.get(`/products?${filterURL}`)
    },
    createProduct: function(token:string, product:ProductLike){
        return instance.post('/products', product ,{
            headers:{
                'x-token': token
            },
        })
    }
};