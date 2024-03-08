import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadProductService } from "../services/product.services"
import { Product } from "../interfaces/product";

export const useProductsMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: uploadProductService,

        onMutate: (product) => {
            
            const optimistProduct = {_id: 'mdmddmdm', ...product}
            //almacenar el producto en el cache del query client
            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: product.category }],
                (old) =>{
                    if(!old) return [optimistProduct]

                    return [...old, optimistProduct]
                }
            );
            
            return {
                optimistProduct
            }
        
        },

        onSuccess: (product, variables, context) => {
            
            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: product.category }],
                (old) =>{
                    if(!old) return [product]
                    return old.map( cacheProduct => {
                        return cacheProduct._id === context.optimistProduct.category._id ? product : cacheProduct;
                    })
                }
            )

        },

        onError(error, variables, context) {

            console.log({error, variables, context})

            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: variables.category }],
                (old) =>{
                    if(!old) return [];
                    return old.filter( cacheProduct => {
                        return cacheProduct._id !== context?.optimistProduct.category._id
                    })
                }
            )
        },
      });

      return productMutation;
}