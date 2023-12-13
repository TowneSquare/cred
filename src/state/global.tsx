import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface globalStates {
  step: number;
  initialized: boolean;
}

const initialState: globalStates = {
  step: 0,
  initialized: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    updateInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export const { updateStep, updateInitialized } = globalSlice.actions;
export default globalSlice.reducer;
