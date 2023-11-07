import { configureStore } from "@reduxjs/toolkit";
import credPointsSlice from "./credPoints";
import dialogSlice from "./dialog";

export const store = configureStore({
  reducer: {
   credPointsState: credPointsSlice,
   dialogState: dialogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
