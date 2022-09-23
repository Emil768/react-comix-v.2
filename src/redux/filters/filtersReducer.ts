import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState, SortProps } from "./types";

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number | null>) {
      state.category = action.payload;
    },
    setSortType(state, action: PayloadAction<SortProps>) {
      state.sortBy = {
        type: action.payload.type,
        order: action.payload.order,
      };
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCategoryIndex, setSortType, setCurrentPage } =
  filters.actions;

export const filterReducer = filters.reducer;
