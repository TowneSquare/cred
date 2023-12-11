import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DefiActivityType } from "../type/defiActivityType";
import { NftType } from "../type/nftType";
import Moralis from "moralis";
import { useDispatch } from "react-redux";
import { ReferralType } from "../type/referralType";
interface credpointsStates {
  isLive: boolean;
  aptTxsPercentage: number | undefined;
  totalPoint: number;
  defiPoint: number;
  nftPoint: number;
  defiActivities: DefiActivityType[];
  nfts: NftType[];
  rewardNFTPointPerDay: number;
  popularDeFi: string | undefined;
  longestNft: NftType | undefined;
  referralPoint: number;
  referralList: ReferralType[];

  connection: boolean;

  inviteCode: string  | undefined;
  initInviteCode: string | undefined;
}

const initialState: credpointsStates = {
  isLive: true,
  aptTxsPercentage: undefined,
  totalPoint: 0,
  defiPoint: 0,
  nftPoint: 0,
  defiActivities: [],
  nfts: [],
  rewardNFTPointPerDay: 0,
  popularDeFi: undefined,
  longestNft: undefined,
  referralPoint: 0,
  referralList: [],

  connection: false,

  inviteCode: undefined,
  initInviteCode: undefined
};

export const fetchCredpoints = createAsyncThunk(
  "credpoints/fetch",
  async ({ wallet, initInviteCode }: any, thunkAPI) => {
    const url = `https://backend.townesquare.xyz/activity/point/${wallet}/${initInviteCode}`;
    try {
      const res = await fetch(url);
      const result = await res.json();

      return result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const credpointsSlice = createSlice({
  name: "credPoints",
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<boolean>) => {
      state.isLive = true;
      state.aptTxsPercentage = undefined;
      state.totalPoint = 0;
      state.defiPoint = 0;
      state.nftPoint = 0;
      state.defiActivities = [];
      state.nfts = [];
      state.rewardNFTPointPerDay = 0;
      state.popularDeFi = undefined;
      state.longestNft = undefined;
      state.referralPoint = 0;
      state.referralList = [];
      state.inviteCode = undefined;
      state.initInviteCode = undefined;
    },
    updateCredPointsLive: (state, action: PayloadAction<boolean>) => {
      state.isLive = action.payload;
    },
    updateConnection: (state, action: PayloadAction<boolean>) => {
      state.connection = action.payload;
    },
    updateInitInviteCode(state, action: PayloadAction<string | undefined>) {
      state.initInviteCode = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCredpoints.fulfilled, (state, action) => {
      if (!action.payload.statusCode && state.connection) {
        state.isLive = true;
        state.aptTxsPercentage = action.payload.aptTxsPercentage;
        state.totalPoint = action.payload.totalPoint;
        state.defiPoint = action.payload.defiPoint;
        state.nftPoint = action.payload.nftPoint;
        state.defiActivities = action.payload.defiActivityList;
        state.nfts = action.payload.nftActivityList;
        state.rewardNFTPointPerDay =
          action.payload.rewardNFTPointPerDay ?? state.nfts.length * 50;
        state.popularDeFi = action.payload.popularDeFi;
        state.longestNft = action.payload.longestHoldingNFT;
        state.referralPoint = action.payload.referralPoint;
        state.referralList = action.payload.referralList;

        state.inviteCode = action.payload.inviteCode;
      }
    })
  },
});

export const { reset, updateCredPointsLive, updateConnection, updateInitInviteCode } = credpointsSlice.actions;
export default credpointsSlice.reducer;
