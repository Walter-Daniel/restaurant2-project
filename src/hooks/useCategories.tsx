import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '../api/category';
import { Category, CategoryResponse } from '../interfaces/category';

const getCategories = async():Promise<Category[]> => {
    const response:AxiosResponse<CategoryResponse> = await categoriesApi.getAll();
    const { categories } = response.data;
    return categories;
}

export const useCategories = () => {

    const categoriesQuery = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000*60*60
        // refetchOnWindowFocus: false
    });
    
    return categoriesQuery;
}