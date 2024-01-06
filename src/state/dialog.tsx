import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogStates {
  bSidebar: boolean;
  bWalletPanel: boolean;
  bWalletHold: boolean;
  bActivityList: boolean;
  bNftList: boolean;
  bReferral: boolean;
  bChangeAvatarPanel: boolean;
  bRecapachaModal: boolean;
  bEmailVerifyModal : boolean;
}

const initialState: dialogStates = {
  bSidebar: false,
  bWalletPanel: false,
  bWalletHold: false,
  bActivityList: false,
  bNftList: false,
  bReferral: false,
  bChangeAvatarPanel : false,
  bEmailVerifyModal : false,
  bRecapachaModal : false
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
    toggleChangeAvatarPanel: (state, action: PayloadAction<boolean>) => {
      state.bChangeAvatarPanel = action.payload;
    },
    toggleRecapachaModal: (state, action: PayloadAction<boolean>) => {
      state.bRecapachaModal = action.payload;
    },
    toggleEmailVerifyModal: (state, action: PayloadAction<boolean>) => {
      state.bEmailVerifyModal = action.payload;
    },
    toggleConnectRequest: (state, action: PayloadAction<boolean>) => {
      state.bWalletHold = action.payload;
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
  toggleChangeAvatarPanel,
  toggleEmailVerifyModal,
  toggleRecapachaModal,
  toggleConnectRequest,
  toggleActivityList,
  toggleNftList,
  toggleReferral
} = dialogSlice.actions;
export default dialogSlice.reducer;
