import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, ComixProps } from "./types";
import { getTotalCount, getTotalPrice } from "../../utils/getTotal";

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemsCart(state, action: PayloadAction<ComixProps>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.totalCount!++;
        findItem.totalPrice! += findItem.price;
      } else {
        state.items.push({
          ...action.payload,
          totalCount: 1,
          totalPrice: action.payload.price,
        });
      }

      state.totalCount = getTotalCount(state.items);
      state.totalPrice = getTotalPrice(state.items);
    },
    plusItemCart(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      findItem && findItem.totalCount!++;
      findItem!.totalPrice = findItem!.price! * findItem!.totalCount!;

      state.totalCount = getTotalCount(state.items);
      state.totalPrice = getTotalPrice(state.items);
    },
    minusItemCart(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem!.totalCount! <= 1) {
        findItem!.totalCount! = 1;
      } else {
        findItem!.totalCount!--;
        findItem!.totalPrice = findItem!.price! * findItem!.totalCount!;
      }

      state.totalCount = getTotalCount(state.items);
      state.totalPrice = getTotalPrice(state.items);
    },
    removeItemCart(state, action: PayloadAction<number>) {
      const findItem = state.items.filter((obj) => obj.id !== action.payload);

      state.items = findItem;

      state.totalCount = getTotalCount(state.items);
      state.totalPrice = getTotalPrice(state.items);
    },
    clearItemsCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setItemsCart,
  plusItemCart,
  minusItemCart,
  removeItemCart,
  clearItemsCart,
} = cart.actions;

export const cartReducer = cart.reducer;
