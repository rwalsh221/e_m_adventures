import { createSlice } from '@reduxjs/toolkit';

import { formatDate } from '../../../helpers/utilities';

const getDays = (checkIn, checkOut) => {
  const milliSeconds = 24 * 60 * 60 * 1000;
  console.log(milliSeconds);

  //   checkIn = '2021-03-23';
  //   checkOut = '2021-04-05';

  const checkInArr = checkIn.split('-');
  const checkOutArr = checkOut.split('-');
  console.log(checkInArr);
  const checkInUtc = Date.UTC(checkInArr[0], checkInArr[1] - 1, checkInArr[2]);
  const checkOutUtc = Date.UTC(
    checkOutArr[0],
    checkOutArr[1] - 1,
    checkOutArr[2]
  );

  let testArr = [];
  console.log(checkInUtc);
  for (let i = checkInUtc; i < checkOutUtc; i = i + milliSeconds) {
    if (i !== checkInUtc) testArr.push(formatDate(i / 1000));
  }
  console.log(testArr);
  return testArr;
};

const HeaderSearchSlice = createSlice({
  name: 'cvInputsPersonal',
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
