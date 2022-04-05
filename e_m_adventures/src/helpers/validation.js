import { dateToMilliseconds } from './utilities';

export const validateDate = (checkIn, checkOut) => {
  let validated = false;

  if (!checkIn || !checkOut) {
    return validated;
  }
  const milliSeconds = 24 * 60 * 60 * 1000;

  const yesterday = Date.now() - milliSeconds;

  const checkInMilliseconds = dateToMilliseconds(checkIn);
  const checkOutMilliseconds = dateToMilliseconds(checkOut);

  if (
    checkInMilliseconds > yesterday &&
    checkOutMilliseconds > checkInMilliseconds
  ) {
    validated = true;
  }

  return validated;
};

export const validateDisplayDate = (displayDate, selectedCheckInDate) => {
  let validated = false;

  if (!selectedCheckInDate) {
    return validated;
  }

  const displayDateMilliseconds = dateToMilliseconds(displayDate);
  const selectedCheckInDateMilliseconds =
    dateToMilliseconds(selectedCheckInDate);

  if (displayDateMilliseconds < selectedCheckInDateMilliseconds) {
    validated = true;
  }

  return validated;
};
