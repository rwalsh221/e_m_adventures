const deleteTimeout = (allBookings) => {
  const bookings = allBookings;
  console.log(allBookings);
  const allHoldBookingsKeys = Object.keys(bookings);

  // 5 MINUTES IN MILLI
  const bookingTimeOut = 300000;

  const deleteArr = [];

  allHoldBookingsKeys.forEach((el) => {
    const futureTime = bookings[el].timeStamp + bookingTimeOut;
    if (futureTime < Date.now()) {
      deleteArr.push(el);
    }
  });

  deleteArr.forEach((el) => {
    delete bookings[el];
  });
  console.log(bookings);
  return bookings;
};

export default deleteTimeout;
