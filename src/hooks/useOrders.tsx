import { AxiosResponse } from "axios";
import { ordersApi } from "../api/orders";
import { Order, OrdersResponse } from "../interfaces/order";
import { useQuery } from "@tanstack/react-query";


const getOrders = async():Promise<Order[]> => {
    
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No se encontró token');
    }
    const response: AxiosResponse<OrdersResponse> = await ordersApi.getAll(token);
    const { orders } = response.data;
    return orders;  
}

export const useOrders = () => {

    const ordersQuery = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
    })

    return ordersQuery;

}