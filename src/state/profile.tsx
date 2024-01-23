import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface profileStates {
  success: boolean;
  newWallet: boolean;
  profileViewed: boolean;
  discordId: string | null;
  twitterId: string | null;
  profileName: string | null;
  twitterImage: string | undefined;
  ansName: any[];
  avatar: string;
}

const initialState: profileStates = {
  success: false,
  newWallet: true,
  profileViewed: false,
  discordId: null,
  twitterId: null,
  profileName: null,
  twitterImage: undefined,
  ansName: [],
  avatar: ''
};

export const fetchProfile = createAsyncThunk(
  "profilePage/fetch",
  async (wallet: any, thunkAPI) => {
    const url = `https://backend.townesquare.xyz/activity/getProfile/${wallet}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      return result;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state, action: PayloadAction<boolean>) => {
      state.newWallet = true;
      state.profileViewed = false;
      state.discordId = null;
      state.twitterId = null;
      state.ansName = [];
      state.avatar = '';
      state.twitterImage = '';
    },
    updateDiscordId: (state, action: PayloadAction<string>) => {
      state.discordId = action.payload;
    },
    updateTwitterId: (state, action: PayloadAction<string>) => {
      state.twitterId = action.payload;
    },
    updateProfileViewed: (state, action: PayloadAction<boolean>) => {
      state.profileViewed = action.payload;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    updateProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    updateTwitterImage: (state, action: PayloadAction<string>) => {
      state.twitterImage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      console.log(action.payload)
      if (!action.payload.statusCode) {
        state.success = true;
        state.newWallet = action.payload.newWallet;
        state.profileViewed = action.payload.profileViewed;
        state.discordId = action.payload.discordId;
        state.twitterId = action.payload.twitterId;
        state.profileName = action.payload.profileName;
        state.ansName = action.payload.ansName;
        state.avatar = action.payload.avatar;
        state.twitterImage = action.payload.twitterImage;
      }
    })
  },
});

export const {
  resetProfile,
  updateDiscordId,
  updateTwitterId,
  updateProfileViewed,
  updateProfileImage,
  updateProfileName
} = profileSlice.actions;
export default profileSlice.reducer;
