import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './slices'
import { authSlice } from './slices';

export const store = configureStore({
  reducer: {
    // cartReducer: counterSlice.reducer
    authReducer: authSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch