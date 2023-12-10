import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface globalStates {
  step: number;
}

const initialState: globalStates = {
  step: 0,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { updateStep } = globalSlice.actions;
export default globalSlice.reducer;
