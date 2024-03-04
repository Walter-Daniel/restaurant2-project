import { AxiosResponse } from 'axios';
import { Product, ProductsResponse } from '../interfaces/product';
import { productsApi } from '../api/products';
import { useQuery } from '@tanstack/react-query';

const getProducts = async():Promise<Product[]> => {
    const response:AxiosResponse<ProductsResponse> = await productsApi.getAll();
    const { allProducts } = response.data;
    console.log(allProducts);
    return allProducts;
}

export const useProducts = () => {

    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        // staleTime: 1000*60*60
        // refetchOnWindowFocus: false
    });
    
    return productsQuery;
}