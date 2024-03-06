import instance from "./base.api"

export const dashboardApi = {
    getAll: function(){
        return instance.get('/dashboard')
    }
}