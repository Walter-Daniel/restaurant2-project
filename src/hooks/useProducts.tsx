import { AxiosResponse } from 'axios';
import { ProductsResponse } from '../interfaces/product';
import { productsApi } from '../api/products';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { number } from 'yup';

interface Options {
    filterKey?: string;
    page?: number;
    pageSize?: number;
}

const getProducts = async({filterKey = '', page = 1, pageSize = 10}: Options) => {

    const params = new URLSearchParams();

    params.append('category', filterKey.toString());
    params.append('page', page.toString());
    params.append('pageSize', pageSize.toString());

    const response:AxiosResponse<ProductsResponse> = await productsApi.getAll(params);
    const {products, promoProducts, totalProducts, totalPages} = response.data;
    return {products, promoProducts, totalProducts, totalPages};
}

export const useProducts = ({ filterKey, pageSize }: Options) => {


    const [page, setpage] = useState(1);

    const { isLoading, error, isError, data = { products: [], promoProducts: [], totalProducts: number, totalPages:1} } = useQuery({
        queryKey: ['products', {filterKey, page, pageSize}],
        queryFn: () => getProducts({filterKey, page, pageSize}),
        staleTime: 1000*60*60
        // refetchOnWindowFocus: false
    });

    const pageChange = (newPage:number) => {
        // if(data?.products.length === 0) return;
        setpage(newPage)
    };
    
    return {
        //properties
        isLoading,
        error, 
        isError, 
        data,
        //getter
        page,
        //methods
        nexPage: pageChange
    }
}