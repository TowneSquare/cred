import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogStates {
  bSidebar: boolean;
  bWalletHold: boolean;
  bActivityList: boolean;
  bNftList: boolean;
  bReferral: boolean;
  bChangeAvatarPanel: boolean;
  bRecapachaModal: boolean;
  bEmailVerifyModal: boolean;
  beligibleModal: boolean;
  bWalletPanel: boolean;
  bSocialConnectPanel: boolean;
  bSuggestVerifyModal: boolean;
  bFirstVerifyModal: boolean;
  beligibleNftModal: boolean;
  beligibleTokenModal: boolean;
  beligibleGameModal: boolean
}

const initialState: dialogStates = {
  bSidebar: false,
  bWalletPanel: false,
  bWalletHold: false,
  bActivityList: false,
  bNftList: false,
  bReferral: false,
  bChangeAvatarPanel: false,
  bEmailVerifyModal: false,
  bRecapachaModal: false,
  bSocialConnectPanel: false,
  bSuggestVerifyModal: false,
  bFirstVerifyModal: false,
  beligibleModal: false,
  beligibleNftModal: false,
  beligibleTokenModal: false,
  beligibleGameModal: false
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
    toggleSocialConnectPanel: (state, action: PayloadAction<boolean>) => {
      state.bSocialConnectPanel = action.payload;
    },
    toggleSuggestVerifyModal: (state, action: PayloadAction<boolean>) => {
      state.bSuggestVerifyModal = action.payload;
    },
    toggleFirstVerifyModal: (state, action: PayloadAction<boolean>) => {
      state.bFirstVerifyModal = action.payload;
    },
    toggleEligibleModal: (state, action: PayloadAction<boolean>) => {
      state.beligibleModal = action.payload;
    },
    toggleEligibleNftModal: (state, action: PayloadAction<boolean>) => {
      state.beligibleNftModal = action.payload;
    },
    toggleEligibleTokenModal: (state, action: PayloadAction<boolean>) => {
      state.beligibleTokenModal = action.payload;
    },
    toggleEligibleGameModal: (state, action: PayloadAction<boolean>) => {
      state.beligibleGameModal = action.payload;
    },
  },
  extraReducers: (builder) => { },
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
  toggleReferral,
  toggleEligibleModal,
  toggleSocialConnectPanel,
  toggleSuggestVerifyModal,
  toggleFirstVerifyModal,
  toggleEligibleNftModal,
  toggleEligibleTokenModal,
  toggleEligibleGameModal
} = dialogSlice.actions;
export default dialogSlice.reducer;
