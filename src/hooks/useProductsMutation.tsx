import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadProductService } from "../services/product.services"
import { Product } from "../interfaces/product";


const categoryToFind  :{ [key: string]: string }= {
    "635170dcc5a32a62d410b13e": "Empanadas",
    "6554e39035611185a1cd55fe": "Hamburguesas",
    "63516f6fc5a32a62d410b13c": "Pizzas",
    "63517341c3c4679da104dd3f": "Sandwiches",
}


export const useProductsMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: uploadProductService,

        onMutate: (product) => {
    
            const optimistProduct = {_id: 'mdmddmdm', ...product}
            //almacenar el producto en el cache del query client
            queryClient.setQueryData<Product[]>(
                ['products', {}],
                (old) =>{
                    if(!old) return [optimistProduct]

                    return [optimistProduct, ...old]
                }
            );
            
            return {
                optimistProduct
            }
        
        },

        onSuccess: (product, variables, context) => {
            
            queryClient.setQueryData<Product[]>(
                ['products', {}],
                (old) =>{
                    if(!old) return [product]
                    
                    const categoryID= product.category.toString();
                    const nameCategory = categoryToFind[categoryID]

                    product.category = {
                        _id: categoryID,
                        name: nameCategory
                    }

                    return old.map( cacheProduct => {
                        return cacheProduct._id === context?.optimistProduct._id ? product : cacheProduct;
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
                        return cacheProduct._id !== context?.optimistProduct._id
                    })
                }
            )
        },
      });

      return productMutation;
}