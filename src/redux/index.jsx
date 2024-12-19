import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/authSlice";
import {api} from './api'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // wishlist: wishlistSlice,
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});