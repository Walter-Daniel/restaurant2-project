import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CardState {
    id: string;
    name: string;
    info: string;
    image: string
}

// Define the initial state using that type
const initialState: CardState[] = [];

export const cartSlice = createSlice({
  name: 'card',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CardState>) => {

    }
  },
});

export const { addToCart } = cartSlice.actions
