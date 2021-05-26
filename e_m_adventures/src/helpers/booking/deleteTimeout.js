export const deleteTimeout = (allBookings) => {
  console.log(allBookings);
  const bookings = allBookings;
  console.log(bookings);
  const allHoldBookingsKeys = Object.keys(bookings);
  console.log(allHoldBookingsKeys);

  // 5 MINUTES IN MILLI
  const bookingTimeOut = 300000;

  const deleteArr = [];

  allHoldBookingsKeys.forEach((el) => {
    const futureTime = bookings[el].timeStamp + bookingTimeOut;
    if (futureTime < Date.now()) {
      deleteArr.push(el);
    }
  });

  console.log(deleteArr);

  deleteArr.forEach((el) => {
    delete bookings[el];
  });

  return bookings;
};
