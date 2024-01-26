import { configureStore } from "@reduxjs/toolkit";
import credpointsSlice from "./credpoints";
import leaderboardSlice from "./leaderboard";
import dialogSlice from "./dialog";
import globalSlice from "./global";
import profileSlice from "./profile";

export const store = configureStore({
  reducer: {
    credpointsState: credpointsSlice,
    leaderboardState: leaderboardSlice,
    dialogState: dialogSlice,
    profileState: profileSlice,
    globalState: globalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
