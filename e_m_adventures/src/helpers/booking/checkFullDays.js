import { getFullDays } from '../utilities';

export const checkFullDays = (checkIn, checkOut, arr) => {
  const fullDayUnavailable = [];

  const newBookingFullDays = getFullDays(checkIn, checkOut);

  console.log(newBookingFullDays);
  arr.forEach((el) => {
    const element = el;
    if (newBookingFullDays.indexOf(element) !== -1) {
      fullDayUnavailable.push(element);
    }
  });

  if (
    arr.indexOf(checkIn) === -1 &&
    arr.indexOf(checkOut) === -1 &&
    fullDayUnavailable.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};
