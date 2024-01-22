import { instance } from "./base.api";

export const products = {
    getAll: function(){
        return instance.get('/products')
    }
}