import { configureStore } from "@reduxjs/toolkit";
import credpointsSlice from "./credpoints";
import leaderboardSlice from "./leaderboard";
import dialogSlice from "./dialog";
import globalSlice from "./global";

export const store = configureStore({
  reducer: {
    credpointsState: credpointsSlice,
    leaderboardState: leaderboardSlice,
    dialogState: dialogSlice,
    globalState: globalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
