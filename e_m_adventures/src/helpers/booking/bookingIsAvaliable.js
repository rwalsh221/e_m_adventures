import checkFullDays from './checkFullDays';

const bookingIsAvaliable = (allBookings, currentBooking, setErrorState) => {
  if (allBookings === {}) return true;

  setErrorState('');
  // COMPARISON ARRAYS
  const checkInArr = [];
  const checkOutArr = [];
  const fullDayArr = [];

  const allBookingsKeys = Object.keys(allBookings);

  // ADD CHECKIN, CHECKOUT, FULLDAY TO COMPARISON ARRAYS
  allBookingsKeys.forEach((el) => {
    // FULL DAYS
    if (allBookings[el].fullDays !== undefined) {
      allBookings[el].fullDays.forEach((element) => {
        fullDayArr.push(element);
      });
    }

    // CHECKIN
    checkInArr.push(allBookings[el].checkIn);
    // CHECKOUT
    checkOutArr.push(allBookings[el].checkOut);
  });

  // SEARCH COMPARISON ARRAYS TO SEE IF NEW BOOKING IS AVALIABLE
  const passFullDay = checkFullDays(currentBooking, fullDayArr);

  if (
    checkInArr.indexOf(currentBooking.checkIn) === -1 &&
    checkOutArr.indexOf(currentBooking.checkOut) === -1 &&
    passFullDay === true
  ) {
    return true;
  }
  return false;
};

export default bookingIsAvaliable;
