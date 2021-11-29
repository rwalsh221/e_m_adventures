import { createSlice } from '@reduxjs/toolkit';

const DashboardContentSlice = createSlice({
  name: 'modifyBooking',
  initialState: {},
  reducers: {
    modifyBooking: (state, action) => (state = { ...action.payload }),
  },
});

export const { modifyBooking } = DashboardContentSlice.actions;

export default DashboardContentSlice.reducer;
