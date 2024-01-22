import { instance } from "./base.api";

const endpoint = "/products";

export const products = {
    getAll: function(){
        return instance.get( endpoint, {
            headers: {
                // 'Authorization': newToken 
               }
        } )
    }
}