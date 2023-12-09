import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RankingType } from "../type/rankingType";
import { updateConnection, updateLive, updateOtc } from './innerslice';

interface leaderboardStates {
  isLive: boolean;
  myRank: number;
  myMorePoint: number;
  lowerPercentage: number;
  topRankings: RankingType[];
  inviteCode :string
  connection: boolean;
}

const initialState: leaderboardStates = {
  isLive: true,
  myRank: 0,
  myMorePoint: 0,
  lowerPercentage: 0,
  topRankings: [],
  inviteCode : "",
  connection: false
};

export const fetchRankings = createAsyncThunk(
  "leaderboard/fetch",
  async (wallet: string, thunkAPI) => {
    const url = `https://backend.townesquare.xyz/activity/leaderboard/${wallet}`;
    console.log(url);
    try {
      const res = await fetch(url);
      const result = await res.json();
      return result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<boolean>) => {
      state.isLive = true;
      state.myRank = 0;
      state.myMorePoint = 0;
      state.lowerPercentage = 0;
      state.topRankings = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRankings.fulfilled, (state, action) => {
      console.log(action.payload, state.connection);

      if (!action.payload.statusCode && state.connection) {
        state.isLive = true;
        state.myRank = action.payload.rank;
        state.topRankings = action.payload.topRankings;
        state.myMorePoint = action.payload.morePoint;
        state.lowerPercentage = action.payload.lowerPercentage;
      }
    }).addCase(updateConnection, (state, action) => {
      state.connection = action.payload;
    }).addCase(updateLive, (state, action) => {
      state.isLive = action.payload;
    }).addCase(updateOtc, (state, action) => {
      state.inviteCode = action.payload;
    });
  },
});

export const { reset } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
