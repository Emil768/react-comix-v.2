import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartReducer";
import { comixReducer } from "./comix/comixReducer";
import { filterReducer } from "./filters/filtersReducer";

const store = configureStore({
  reducer: {
    comix: comixReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
