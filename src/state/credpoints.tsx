import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DefiActivityType } from "../type/defiActivityType";
import { NftType } from "../type/nftType";
import Moralis from "moralis";

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
}

const initialState: credpointsStates = {
  isLive: false,
  aptTxsPercentage: undefined,
  totalPoint: 0,
  defiPoint: 0,
  nftPoint: 0,
  defiActivities: [],
  nfts: [],
  rewardNFTPointPerDay: 0,
  popularDeFi: undefined,
};

export const fetchCredpoints = createAsyncThunk(
  "credpoints/fetch",
  async (wallet: string, thunkAPI) => {
    const url = `https://backend.townesquare.xyz/activity/point/${wallet}`;
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCredpoints.fulfilled, (state, action) => {
      console.log(action.payload)
      if (!action.payload.statusCode) {
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
      }
    });
  },
});

export const {} = credpointsSlice.actions;
export default credpointsSlice.reducer;
