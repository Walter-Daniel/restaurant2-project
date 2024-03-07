import { Dispatch } from "@reduxjs/toolkit";
import { uploadProductService } from "../../services/product.services";
import { Product } from "../../interfaces/product";
import { uploadError, uploadStart, uploadSucces } from "../slices/uploadSlice";

export const fetchProducts = (productsData:Omit<Product, '_id'>) => {
    return async(dispatch:Dispatch) => {
        dispatch(uploadStart())
        const result = await uploadProductService(productsData);
        if(result.ok) {
          const { product } = result;
          dispatch(uploadSucces(product));
        } else {
          const errorMessage = result.errorMessage
          dispatch(uploadError({errorMessage}));
        }
      }
};