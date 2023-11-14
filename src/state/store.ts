import { configureStore } from "@reduxjs/toolkit";
import credpointsSlice from "./credpoints";
import leaderboardSlice from "./leaderboard";
import dialogSlice from "./dialog";

export const store = configureStore({
  reducer: {
    credpointsState: credpointsSlice,
    leaderboardState: leaderboardSlice,
    dialogState: dialogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
