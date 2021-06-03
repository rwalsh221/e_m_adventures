export const checkFullDays = (currentBooking, allBookingsFullDay) => {
  const fullDayUnavailable = [];

  allBookingsFullDay.forEach((el) => {
    const element = el;
    if (currentBooking.fullDays.indexOf(element) !== -1) {
      fullDayUnavailable.push(element);
    }
  });

  if (
    allBookingsFullDay.indexOf(currentBooking.checkIn) === -1 &&
    allBookingsFullDay.indexOf(currentBooking.checkOut) === -1 &&
    fullDayUnavailable.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};
