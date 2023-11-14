import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface credpointsStates {
   isLive: boolean;
   myPoint: number;
   updatedAt: number;
};

const initialState: credpointsStates = {
   isLive: false,
   myPoint: 0,
   updatedAt: Date.now()
};

export const fetchCredpoints = createAsyncThunk(
   'credpoints/fetch',
   async (wallet: string, thunkAPI) => {
      const url = `https://backend.townesquare.xyz/activity/credpoints/${wallet}`;
      try {
         const res = await fetch(url);
         return await res.json();
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);


export const credpointsSlice = createSlice({
   name: 'credPoints',
   initialState,
   reducers: {
      
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCredpoints.fulfilled, (state, action) => {
      });
   },
});

export const {
} = credpointsSlice.actions;
export default credpointsSlice.reducer;


