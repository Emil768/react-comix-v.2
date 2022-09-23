import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { ComixState, ComixTotal, FilterProps } from "./types";

export const fetchComix = createAsyncThunk<ComixTotal, FilterProps>(
  "comix/fetchComix",
  async (params) => {
    const { category, sortBy, currentPage } = params;
    const { data } = await axios.get(
      `http://localhost:3001/comix?_page=${currentPage}&_limit=10&${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    );

    const comix = await axios.get(`http://localhost:3001/comix`);
    const allComix: number = await comix.data.length;

    return {
      data,
      allComix,
    };
  }
);

const initialState: ComixState = {
  comix: [],
  comixContainer: [],
  totalCount: 0,
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
        state.comix = action.payload.data;
        state.comixContainer = action.payload.data;
        state.totalCount = action.payload.allComix;
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
