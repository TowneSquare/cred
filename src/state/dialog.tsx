import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogStates {
  bSidebar: boolean;
  bWalletPanel: boolean;
}

const initialState: dialogStates = {
  bSidebar: false,
  bWalletPanel: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.bSidebar = action.payload;
    },
    toggleWalletPanel: (state, action: PayloadAction<boolean>) => {
      state.bWalletPanel = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleSidebar, toggleWalletPanel } =
  dialogSlice.actions;
export default dialogSlice.reducer;
