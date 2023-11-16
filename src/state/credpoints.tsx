import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DefiActivityType } from '../type/defiActivityType';
import { NftType } from '../type/nftType';

interface credpointsStates {
   isLive: boolean;
   totalPoint: number;
   defiPoint: number;
   nftPoint: number;
   defiActivities: DefiActivityType[];
   nfts: NftType[];
   rewardNFTPointPerDay: number;
};

const initialState: credpointsStates = {
   isLive: false,
   totalPoint: 0,
   defiPoint: 0,
   nftPoint: 0,
   defiActivities: [],
   nfts: [],
   rewardNFTPointPerDay: 0,
};

export const fetchCredpoints = createAsyncThunk(
   'credpoints/fetch',
   async (wallet: string, thunkAPI) => {
      const url = `https://backend.townesquare.xyz/activity/point/${wallet}`;
      try {
         const res = await fetch(url);
         return await res.json();
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);


export const credpointsSlice = createSlice({
   name: 'credPoints',
   initialState,
   reducers: {
      
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCredpoints.fulfilled, (state, action) => {
         state.isLive = true;
         state.totalPoint = action.payload.totalPoint;
         state.defiPoint = action.payload.defiPoint;
         state.nftPoint = action.payload.nftPoint;
         state.defiActivities = action.payload.defiActivityList;
         state.nfts = action.payload.holdingNFTs;
         state.rewardNFTPointPerDay = action.payload.rewardNFTPointPerDay;
      });
   },
});

export const {
} = credpointsSlice.actions;
export default credpointsSlice.reducer;


