import { checkFullDays } from './checkFullDays';
// import { getFullDays } from '../utilities';

export const bookingIsAvaliable = (
  allBookings,
  currentBooking,
  setErrorState
) => {
  if (allBookings === {}) return true;

  setErrorState('');
  // COMPARISON ARRAYS
  let checkInArr = [];
  let checkOutArr = [];
  let fullDayArr = [];

  const allHoldBookingsKeys = Object.keys(allBookings);

  // ADD VALUES TO COMPARISON ARRAY IF NOT EQUAL TO CURRENT BOOKING
  allHoldBookingsKeys.forEach((el) => {
    // FULL DAYS
    if (allBookings[el].fullDays !== undefined) {
      allBookings[el].fullDays.forEach((el) => {
        const bookingFullday = el;

        if (
          currentBooking.fullDays.indexOf(bookingFullday) !== -1 ||
          currentBooking.fullDays.length === 0
        ) {
          fullDayArr.push(bookingFullday);
        }
      });
    }

    // CHECKIN
    if (allBookings[el].checkIn !== currentBooking.checkIn) {
      checkInArr.push(allBookings[el].checkIn);
    }
    // CHECKOUT
    if (allBookings[el].checkOut !== currentBooking.checkOut) {
      checkOutArr.push(allBookings[el].checkOut);
    }
  });

  // SEARCH COMPARISON ARRAYS TO SEE IF NEW BOOKING IS AVALIABLE
  const passFullDay = checkFullDays(
    currentBooking.checkIn,
    currentBooking.checkOut,
    fullDayArr
  );

  if (
    checkInArr.indexOf(currentBooking.checkIn) === -1 &&
    checkOutArr.indexOf(currentBooking.checkOut) === -1 &&
    passFullDay === true
  ) {
    console.log('tiss true');
    return true;
  } else {
    console.log('/bookingUnavaliable');
    return false;
  }
};
