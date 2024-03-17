
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProductService } from "../services/product.services";
import { Product } from "../interfaces/product";

interface ProductsProps {
    products: Product[],
    totalPages: number;
    totalProducts: number;
}

export const useProductsMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: uploadProductService,

        onMutate: async (product) => {
            // Optimistic product
            const optimisticProduct = { _id: 'ID temporario', ...product };

            // Almacenar producto en el cache de query client
            queryClient.setQueryData<ProductsProps>(
                ['products', { filterKey: product.category, page: 1, pageSize:3 }],
                (oldData) => {
                    if (!oldData) return { products: [optimisticProduct], totalPages: 0, totalProducts: 0 };
                    return {
                        ...oldData,
                        products: [optimisticProduct, ...oldData.products],
                        totalProducts: oldData.totalProducts + 1
                    };
                }
            );

            //almacenar producto en tabla
            queryClient.setQueryData<ProductsProps>(
                ['products', { page: 1 }],
                (oldData) => {
                    if (!oldData) return { products: [optimisticProduct], totalPages: 0, totalProducts: 0 };
                    return {
                        ...oldData,
                        products: [optimisticProduct, ...oldData.products],
                        totalProducts: oldData.totalProducts + 1
                    };
                }
            );

            return { optimisticProduct };
        },

        onSuccess: (product, _ , context) => {

            queryClient.setQueryData<ProductsProps>(
                ['products', {"filterKey": product.category, "page":1, "pageSize":3 }],
                (oldData) => {
                    if (!oldData) return;
                    return {
                        ...oldData,
                        products: oldData.products.map(cacheProduct => {
                            return cacheProduct._id === context.optimisticProduct._id ? product : cacheProduct;
                        })
                    };
                }
            )

            //Almacenar producto en tabla
            queryClient.setQueryData<ProductsProps>(
                ['products', { page: 1 }],
                (oldData) => {
                    if (!oldData) return;
                    return {
                        ...oldData,
                        products: oldData.products.map(cacheProduct => {
                            return cacheProduct._id === context.optimisticProduct._id ? product : cacheProduct;
                        })
                    };
                }
            );
        },

        onError(error, variables, context){
            console.log(error, variables, context);
        }

      });
      

      return productMutation;
}