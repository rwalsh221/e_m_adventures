import { getFullDays } from '../utilities';

export const checkFullDays = (checkIn, checkOut, allBookingsFullDay) => {
  const fullDayUnavailable = [];

  // TODO: NOT NEEDED SEND FULL DAYS TO FUNCTION
  const newBookingFullDays = getFullDays(checkIn, checkOut);

  console.log(newBookingFullDays);
  console.log(allBookingsFullDay);
  allBookingsFullDay.forEach((el) => {
    const element = el;
    if (newBookingFullDays.indexOf(element) !== -1) {
      console.log(element);
      fullDayUnavailable.push(element);
    }
  });

  if (
    allBookingsFullDay.indexOf(checkIn) === -1 &&
    allBookingsFullDay.indexOf(checkOut) === -1 &&
    fullDayUnavailable.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};
