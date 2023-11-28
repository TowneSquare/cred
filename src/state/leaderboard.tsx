import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RankingType } from "../type/rankingType";

interface leaderboardStates {
  myRank: number;
  myMorePoint: number;
  lowerPercentage: number;
  topRankings: RankingType[];
}

const initialState: leaderboardStates = {
  myRank: 0,
  myMorePoint: 0,
  lowerPercentage: 0,
  topRankings: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRankings.fulfilled, (state, action) => {
      console.log(action.payload);
      if (
        !action.payload.statusCode
      ) {
        state.myRank = action.payload.rank;
        state.topRankings = action.payload.topRankings;
        state.myMorePoint = action.payload.morePoint;
        state.lowerPercentage = action.payload.lowerPercentage;
      }
    });
  },
});

export const {} = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
