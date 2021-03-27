import { createSlice } from '@reduxjs/toolkit';

const getDays = (checkIn, checkOut) => {
  const milliSeconds = 24 * 60 * 60 * 1000;

  let bookedDaysArr = [];

  for (let i = checkIn; i < checkOut; i = i + milliSeconds) {
    console.log('loop');
    if (i !== checkIn) bookedDaysArr.push(i);
  }

  return bookedDaysArr;
};

const HeaderSearchSlice = createSlice({
  name: 'booking',
  initialState: {},
  reducers: {
    booking: (state, action) => {
      const fullDays = getDays(action.payload.checkIn, action.payload.checkOut);
      return (state = { ...action.payload, fullDays: fullDays });
    },
  },
});

export const { booking } = HeaderSearchSlice.actions;

export default HeaderSearchSlice.reducer;
