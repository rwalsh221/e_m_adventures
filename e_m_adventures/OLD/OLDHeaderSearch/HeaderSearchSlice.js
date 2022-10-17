import { createSlice } from '@reduxjs/toolkit';

const getDays = (checkIn, checkOut) => {
  const milliSeconds = 24 * 60 * 60 * 1000;

  const bookedDaysArr = [];

  for (let i = checkIn; i < checkOut; i += milliSeconds) {
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
      return (state = { ...action.payload, fullDays });
    },
  },
});

export const { booking } = HeaderSearchSlice.actions;

export default HeaderSearchSlice.reducer;
