import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RankingType } from "../type/rankingType";

interface leaderboardStates {
  isLive: boolean;
  myRank: number;
  myMorePoint: number;
  lowerPercentage: number;
  topRankings: RankingType[];

  connection: boolean;
}

const initialState: leaderboardStates = {
  isLive: true,
  myRank: 0,
  myMorePoint: 0,
  lowerPercentage: 0,
  topRankings: [],

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
    },
    updateLeaderboardLive: (state, action: PayloadAction<boolean>) => {
      state.isLive = action.payload;
    },
    updateConnection: (state, action: PayloadAction<boolean>) => {
      state.connection = action.payload;
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
    });
  },
});

export const { reset, updateLeaderboardLive, updateConnection } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
