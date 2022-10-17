import checkFullDays from './checkFullDays';

const bookingIsAvaliable = (allBookings, currentBooking, setErrorState) => {
  if (allBookings === {}) return true;
  console.log(allBookings);
  setErrorState('');
  // COMPARISON ARRAYS
  const checkInArr = [];
  const checkOutArr = [];
  const fullDayArr = [];

  const allBookingsKeys = Object.keys(allBookings);
  console.log(allBookingsKeys);
  // ADD CHECKIN, CHECKOUT, FULLDAY TO COMPARISON ARRAYS
  allBookingsKeys.forEach((el) => {
    // FULL DAYS
    if (allBookings[el].fullDays !== undefined) {
      allBookings[el].fullDays.forEach((el) => {
        fullDayArr.push(el);
      });
    }

    // CHECKIN
    checkInArr.push(allBookings[el].checkIn);
    // CHECKOUT
    checkOutArr.push(allBookings[el].checkOut);
  });
  console.log(currentBooking);
  console.log(checkInArr);
  // SEARCH COMPARISON ARRAYS TO SEE IF NEW BOOKING IS AVALIABLE
  const passFullDay = checkFullDays(currentBooking, fullDayArr);
  console.log(passFullDay);
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
