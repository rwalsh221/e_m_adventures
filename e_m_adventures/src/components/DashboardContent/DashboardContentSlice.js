import { createSlice } from '@reduxjs/toolkit';

// const getDays = (checkIn, checkOut) => {
//   const milliSeconds = 24 * 60 * 60 * 1000;

//   let bookedDaysArr = [];

//   for (let i = checkIn; i < checkOut; i = i + milliSeconds) {
//     console.log('loop');
//     if (i !== checkIn) bookedDaysArr.push(i);
//   }

//   return bookedDaysArr;
// };

const DashboardContentSlice = createSlice({
  name: 'modifyBooking',
  initialState: {},
  reducers: {
    modifyBooking: (state, action) => {
      console.log(action.payload);
      console.log(state);
      return (state = { ...action.payload });
    },
  },
});

export const { modifyBooking } = DashboardContentSlice.actions;

export default DashboardContentSlice.reducer;
