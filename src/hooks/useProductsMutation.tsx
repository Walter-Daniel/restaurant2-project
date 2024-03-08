import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadProductService } from "../services/product.services"
import { Product } from "../interfaces/product";

export const useProductsMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: uploadProductService,
        onSuccess: (product) => {
          
            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: product }],
                (old) =>{
                    if(!old) return [product]

                    return [...old, product]
                }
            )

        },
        // onSettled: () => {
        //     console.log('Se ejecuta despues de la carga')
        // }
      });

      return productMutation;
}