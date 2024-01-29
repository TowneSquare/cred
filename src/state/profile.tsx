import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtEncode from 'jwt-encode';
const secretKey = process.env.REACT_APP_JWT_SECRET_KEY ?? 'default-secret-key';

interface profileStates {
  success: boolean;
  newWallet: boolean;
  profileViewed: boolean;
  discordId: string | null;
  twitterId: string | null;
  email: string | undefined;
  profileName: string | null;
  twitterImage: string | undefined;
  ansName: any[];
  avatar: string;
  requestEmail: string;
}

const initialState: profileStates = {
  success: false,
  newWallet: true,
  profileViewed: false,
  discordId: null,
  twitterId: null,
  profileName: null,
  requestEmail: "",
  email: undefined,
  twitterImage: undefined,
  ansName: [],
  avatar: ''
};

export const fetchProfile = createAsyncThunk(
  "profilePage/fetch",
  async (wallet: any, thunkAPI) => {
    const token = jwtEncode({ wallet: wallet }, secretKey);

    const url = `https://backend.townesquare.xyz/activity/getProfile/${token}`;
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
      state.requestEmail = '';
      state.email = undefined;
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
    toggleUpdateRequestEmail: (state, action: PayloadAction<string>) => {
      state.requestEmail = action.payload;
    },
    updateTwitterImage: (state, action: PayloadAction<string>) => {
      state.twitterImage = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      // console.log(action.payload)
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
        state.email = action.payload.email;
      }
    })
  },
});

export const {
  resetProfile,
  updateDiscordId,
  updateTwitterId,
  updateProfileViewed,
  toggleUpdateRequestEmail,
  updateProfileImage,
  updateProfileName,
  updateEmail
} = profileSlice.actions;
export default profileSlice.reducer;
