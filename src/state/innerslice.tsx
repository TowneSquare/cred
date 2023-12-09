import { createSlice } from '@reduxjs/toolkit';

const innerSlice = createSlice({
  name: 'connection',
  initialState: false,
  reducers: {
    updateConnection: (state, action) => {
      state = action.payload;
    },
    updateLive: (state, action) => {
      state = action.payload;
    },
    updateOtc: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updateConnection, updateLive, updateOtc } = innerSlice.actions;
export default innerSlice.reducer;