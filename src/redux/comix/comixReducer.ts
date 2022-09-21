import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Comix, ComixState, FilterProps } from "./types";

export const fetchComix = createAsyncThunk<Comix[], FilterProps>(
  "comix/fetchComix",
  async (params) => {
    const { category, sortBy } = params;

    const { data } = await axios.get(
      `http://localhost:3001/comix?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    );
    return data;
  }
);

const initialState: ComixState = {
  comix: [],
  comixContainer: [],
  status: "loading",
};

const comixSlice = createSlice({
  name: "comix",
  initialState,
  reducers: {
    setSearchComix(state, action: PayloadAction<string>) {
      const findItem = state.comixContainer.filter(
        (item) =>
          item.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
      );
      state.comix = findItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComix.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComix.fulfilled, (state, action) => {
        state.comix = action.payload;
        state.comixContainer = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchComix.rejected, (state) => {
        state.comix = [];
        state.status = "loading";
      });
  },
});

export const { setSearchComix } = comixSlice.actions;

export const comixReducer = comixSlice.reducer;
