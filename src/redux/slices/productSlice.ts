import { createSlice } from '@reduxjs/toolkit';

type Product = {
    name: string;
    detail: string;
    price: number;
    category: string;
    active: boolean;
    promo: boolean;
}


const initialState:Product = {
  name: '',
  detail: '',
  price: 0,
  category: '',
  active: false,
  promo: false
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    creteProduct:(state, {payload}) => {
        state.name = payload.name,
        state.detail = payload.detail,
        state.price = payload.price,
        state.category = payload.category,
        state.active = payload.active,
        state.promo = payload.promo
    }
  },
})

export const { creteProduct } = productSlice.actions