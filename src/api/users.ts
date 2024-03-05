import instance from "./base.api";

export const usersApi = {
    getAll: function(token:string){
        return instance.get('/users', {
            headers:{
                'x-token': token
            }
        })
    }
};