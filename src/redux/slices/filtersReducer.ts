import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface SortProps {
  type: string;
  order: string;
}

interface FiltersProps {
  category: number | null;
  sortBy: SortProps;
}

const initialState: FiltersProps = {
  category: null,
  sortBy: {
    type: "rating",
    order: "desc",
  },
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number | null>) {
      state.category = action.payload;
    },
    setSortType(state, action: PayloadAction<SortProps>) {
      console.log(action.payload);
      state.sortBy = {
        type: action.payload.type,
        order: action.payload.order,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { setCategoryIndex, setSortType } = filters.actions;

export const filterReducer = filters.reducer;
