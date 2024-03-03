import { FC, createContext, useEffect, useState } from "react";
import { productsApi } from "../../api/products";
import { Product, ProductsResponse } from "../../interfaces/product";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

type ContextProps = {
    products: Product[],
    isLoading: boolean,
    totalProducts: number
}
interface ErrorResponse {
    message: string;
}
export const ProductsContext = createContext<ContextProps | null>(null);

export const ProductsProvider: FC<{ children : JSX.Element }>  = ({ children }) => {

    const [products, setProducts ] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalProducts, setTotalProducts] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async() => {
            setIsLoading(true)
            try {
                const response: AxiosResponse<ProductsResponse> = await productsApi.getAll();
                const { allProducts, total } = response.data;
                setProducts(allProducts)
                setTotalProducts(total)
              } catch (error) {
                if (isAxiosError(error)) {
                  const axiosError = error as AxiosError<ErrorResponse>;
                  const errorMessage = axiosError.response?.data.message || 'An error occurred';
                  return {
                    ok: false,
                    errorMessage: errorMessage
                  };
                } else {
                  return {
                    ok: false,
                    errorMessage: 'An error occurred'
                  };
                }
              }finally {
                setIsLoading(false);
              }
        }
        fetchProducts();
    }, [])
    
   

    return(
        <ProductsContext.Provider value={{ products, isLoading, totalProducts }}>
            { children }  
        </ProductsContext.Provider>
    );
}