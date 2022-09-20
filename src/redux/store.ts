import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartReducer";
import { comixReducer } from "./slices/comixReducer";
import { filterReducer } from "./slices/filtersReducer";

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
