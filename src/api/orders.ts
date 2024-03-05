import instance from "./base.api";

export const ordersApi = {
    getAll: function(token:string){
        return instance.get('/orders', {
            headers:{
                'x-token': token
            }
        })
    }
};