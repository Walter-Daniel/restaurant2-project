import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';

export type ProductSlice = {
  isLoadin : boolean,
  errorMessage : string | null,
  product : Product[]
}

const initialState:ProductSlice = {
  isLoadin : false,
  errorMessage : null,
  product : []
}
export const uploadSlice = createSlice({
  name: 'upload',
  initialState,

  reducers: {
      uploadStart(state){
        state.isLoadin = true,
        state.errorMessage = null,
        state.product = []
      },
      uploadError(state, {payload}){
        state.isLoadin = false,
        state.errorMessage = payload.errorMessage,
        state.product = []
      },
      uploadSucces(state, {payload}){
        state.isLoadin = false,
        state.errorMessage = null,
        state.product.push(payload)
      },
  },
})

export const { uploadStart, uploadError, uploadSucces } = uploadSlice.actions;