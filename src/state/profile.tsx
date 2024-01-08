import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface profileStates {
  didToken: string;
  discord: boolean;
}

const initialState: profileStates = {
  didToken: "",
  discord: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateDidToken: (state, action: PayloadAction<string>) => {
      state.didToken = action.payload;
    },
    updateDiscordState: (state, action: PayloadAction<boolean>) => {
      state.discord = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const {
  updateDidToken,
  updateDiscordState
} = profileSlice.actions;
export default profileSlice.reducer;
