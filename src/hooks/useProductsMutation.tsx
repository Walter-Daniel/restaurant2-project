
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductService, uploadProductService } from "../services/product.services";
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

export const useDeleteProductMutation = () => {
    const queryClient = useQueryClient();

    const deleteProductMutation = useMutation({
        mutationFn: deleteProductService,

        onMutate: async (productId) => {
            // Guardar copia del producto antes de eliminarlo para un posible rollback
            const previousProducts = queryClient.getQueryData<ProductsProps>(['products', { page: 1 }]);

            // Eliminar producto optimista
            queryClient.setQueryData<ProductsProps>(
                ['products', { page: 1 }],
                (oldData) => {
                    if (!oldData) return;
                    return {
                        ...oldData,
                        products: oldData.products.filter(product => product._id !== productId),
                        totalProducts: oldData.totalProducts - 1
                    };
                }
            );

            return { previousProducts };
        },

        onSuccess: (data, variables, context) => {
            // Actualizar el caché después de eliminar el producto
            // Aquí puedes hacer cualquier limpieza necesaria o actualizaciones adicionales del caché

            // Por ejemplo, si quieres actualizar otras partes del caché relacionadas con la eliminación del producto,
            // puedes hacerlo aquí usando queryClient.setQueryData()

            console.log("Producto eliminado exitosamente");
        },

        onError: (error, variables, context) => {
            // Si la eliminación falla, restaurar los datos originales
            if (context && context.previousProducts) {
                queryClient.setQueryData(['products', { page: 1 }], context.previousProducts);
            }

            console.log("Error al eliminar el producto:", error);
        }
    });

    return deleteProductMutation;
}
