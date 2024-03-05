import instance from "./base.api"

export const categoriesApi = {
    getAll: function(){
        return instance.get('/categories')
    }
}