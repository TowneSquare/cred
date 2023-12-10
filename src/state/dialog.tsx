import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogStates {
  bSidebar: boolean;
  bWalletPanel: boolean;
  bActivityList: boolean;
  bNftList: boolean;
  bReferral: boolean;
}

const initialState: dialogStates = {
  bSidebar: false,
  bWalletPanel: false,
  bActivityList: false,
  bNftList: false,
  bReferral: false,
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
    toggleActivityList: (state, action: PayloadAction<boolean>) => {
      state.bActivityList = action.payload;
    },
    toggleNftList: (state, action: PayloadAction<boolean>) => {
      state.bNftList = action.payload;
    },
    toggleReferral: (state, action: PayloadAction<boolean>) => {
      state.bReferral = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  toggleSidebar,
  toggleWalletPanel,
  toggleActivityList,
  toggleNftList,
  toggleReferral
} = dialogSlice.actions;
export default dialogSlice.reducer;
