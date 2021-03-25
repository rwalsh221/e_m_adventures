import { createSlice } from '@reduxjs/toolkit';

import { formatDate } from '../../../helpers/utilities';

const getDays = (checkIn, checkOut) => {
  const milliSeconds = 24 * 60 * 60 * 1000;
  console.log(milliSeconds);
  const checkInInit = checkIn;
  console.log(checkIn);
  console.log(checkOut);

  let testArr = [];
  console.log(checkIn);
  for (let i = checkIn; i < checkOut; i = i + milliSeconds) {
    console.log('loop');
    if (i !== checkIn) testArr.push(i);
  }
  console.log(testArr);
  return testArr;
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
