import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ComixProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
  totalCount?: number;
  totalPrice?: number;
}

interface CartProps {
  items: ComixProps[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartProps = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemsCart(state, action: PayloadAction<ComixProps>) {
      const getTotalPrice = (arr: ComixProps[]) =>
        arr.reduce((sum, item) => (sum += item.price), 0);

      const itemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      let newItems = {};

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];

        const { price } = item;

        item.totalCount! += 1;
        item.totalPrice! += price;
      } else {
        state.items.push({
          ...action.payload,
          totalCount: 1,
          totalPrice: action.payload.price,
        });
      }

      state.totalCount = state.items.length;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const { setItemsCart } = cart.actions;

export const cartReducer = cart.reducer;
