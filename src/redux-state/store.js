import { configureStore } from '@reduxjs/toolkit'
import {cartSlice} from "./reducers/cart-reducer";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
})