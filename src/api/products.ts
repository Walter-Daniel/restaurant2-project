import instance  from "./base.api";

export const productsApi = {
    getAll: function(){
        return instance.get('/products')
    }
};