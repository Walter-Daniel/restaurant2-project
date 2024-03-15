import { AxiosResponse } from "axios";
import { PromoResponse } from "../interfaces/promos";
import { productsApi } from "../api/products";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Options {
    page?: number;
    pageSize?: number;
}

const getPromos = async({page = 1, pageSize = 10}:Options) => {

    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('pageSize', pageSize.toString());

    const response: AxiosResponse<PromoResponse> = await productsApi.getPromo(params);
    const { promoProducts, totalPages } = response.data;
    return { promoProducts, totalPages }

}

export const usePromotions = ({ pageSize }:Options) => {

    const [page, setPage] = useState(1);

    const { data, isError, isLoading } = useQuery({
        queryKey: ['promos', {page, pageSize}],
        queryFn: () => getPromos({ page, pageSize }),
        staleTime: 1000*60*60
    });

    const pageChange = (newPage:number) => {
        setPage(newPage)
    };

    return {
        //Properties
        isLoading,
        isError,
        data,

        //Getters
        page,

        //methods
        pageChange
    }

}