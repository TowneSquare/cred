import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface credPointsStates {
};

const initialState: credPointsStates = {
}

export const fetchCredPoints = createAsyncThunk(
   'credpoints/fetch',
   async (arg, thunkAPI) => {
      try {
         return [];
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);


export const credPointsSlice = createSlice({
   name: 'credPoints',
   initialState,
   reducers: {
      
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCredPoints.fulfilled, (state, action) => {
      });
   },
});

export const {
} = credPointsSlice.actions;
export default credPointsSlice.reducer;


