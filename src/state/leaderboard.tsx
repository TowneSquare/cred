import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RankingType } from "../type/rankingType";
import { TwitterList } from "../type/twitterList";

interface leaderboardStates {
  isLive: boolean;
  myRank: number;
  myMorePoint: number;
  lowerPercentage: number;
  topRankings: RankingType[];
  twitterList: TwitterList[];
  connection: boolean;
  leaderboardTapIndex: number;
  initInviteCode : string | undefined;
}

const initialState: leaderboardStates = {
  isLive: true,
  myRank: 0,
  myMorePoint: 0,
  lowerPercentage: 0,
  topRankings: [],
  twitterList: [],
  connection: false,
  leaderboardTapIndex: 0,
  initInviteCode : undefined
};

export const fetchRankings = createAsyncThunk(
  "leaderboard/fetch",
  async (wallet: string, thunkAPI) => {
    const url = `https://backend.townesquare.xyz/activity/leaderboard/${wallet}`;
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
      state.twitterList = []
    },
    updateLeaderboardLive: (state, action: PayloadAction<boolean>) => {
      state.isLive = action.payload;
    },
    updateConnection: (state, action: PayloadAction<boolean>) => {
      state.connection = action.payload;
    },
    updateLeaderboardTapIndex: (state, action: PayloadAction<number>) => {
      state.leaderboardTapIndex = action.payload;
    },
    updateInitInviteCode: (state, action: PayloadAction<string | undefined>) => {
      state.initInviteCode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRankings.fulfilled, (state, action) => {
      console.log(action.payload)
      if (!action.payload.statusCode && state.connection) {
        state.isLive = true;
        state.myRank = action.payload.rank;
        state.topRankings = action.payload.topRankings;
        state.twitterList = action.payload.twitterList;
        state.myMorePoint = action.payload.morePoint;
        state.lowerPercentage = action.payload.lowerPercentage;
      }
    })
  },
});

export const { reset, updateLeaderboardLive, updateConnection, updateLeaderboardTapIndex, updateInitInviteCode } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
