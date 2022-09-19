import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Comix {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  category: number;
  rating: number;
}

interface ComixState {
  comix: Comix[];
  status: string;
}

export const fetchComix = createAsyncThunk<Comix[]>(
  "comix/fetchComix",
  async () => {
    const { data } = await axios.get("http://localhost:3001/comix");
    return data;
  }
);

const initialState: ComixState = {
  comix: [],
  status: "loading",
};

const comixSlice = createSlice({
  name: "comix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComix.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComix.fulfilled, (state, action) => {
        state.comix = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchComix.rejected, (state) => {
        state.comix = [];
        state.status = "loading";
      });
  },
});

export const comixReducer = comixSlice.reducer;
