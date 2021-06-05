import { createSlice } from '@reduxjs/toolkit';

const DashboardContentSlice = createSlice({
  name: 'modifyBooking',
  initialState: {},
  reducers: {
    modifyBooking: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

export const { modifyBooking } = DashboardContentSlice.actions;

export default DashboardContentSlice.reducer;
