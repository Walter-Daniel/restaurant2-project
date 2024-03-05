import { AxiosResponse } from "axios";
import { usersApi } from "../api/users"
import { User, UsersResponse } from "../interfaces/user";
import { useQuery } from "@tanstack/react-query";



const getUsers = async():Promise<User[]> =>{
    const token = localStorage.getItem('token');
    if(!token) throw new Error('No se encontró token')
    const response: AxiosResponse<UsersResponse> = await usersApi.getAll(token);
    const { users } = response.data;
    return users
};

export const useUsers = () =>{

    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })

    return usersQuery

};