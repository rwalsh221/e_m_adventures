import { createSlice } from '@reduxjs/toolkit';

const getDays = (checkIn, checkOut) => {};

const HeaderSearchSlice = createSlice({
  name: 'cvInputsPersonal',
  initialState: {},
  reducers: {
    booking: (state, action) => (state = { ...action.payload }),
  },
});

export const { booking } = HeaderSearchSlice.actions;

export default HeaderSearchSlice.reducer;
