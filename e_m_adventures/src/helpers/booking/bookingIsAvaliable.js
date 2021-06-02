import { checkFullDays } from './checkFullDays';

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

  const allBookingsKeys = Object.keys(allBookings);

  // ADD CHECKIN, CHECKOUT, FULLDAY TO COMPARISON ARRAYS
  allBookingsKeys.forEach((el) => {
    // FULL DAYS
    if (allBookings[el].fullDays !== undefined) {
      allBookings[el].fullDays.forEach((el) => {
        const bookingFullday = el;

        fullDayArr.push(bookingFullday);
      });
    }

    // CHECKIN

    checkInArr.push(allBookings[el].checkIn);
    // CHECKOUT

    checkOutArr.push(allBookings[el].checkOut);
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
