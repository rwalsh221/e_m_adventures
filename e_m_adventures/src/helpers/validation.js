const validateDate = (checkIn, checkOut) => {
  let validated = false;
  console.log('validate');
  if (!checkIn || !checkOut) {
    console.log(validated);
    return validated;
  }
  const milliSeconds = 24 * 60 * 60 * 1000;
  //   const date = new Date();

  const yesterday = Date.now() - milliSeconds;

  const checkInArr = checkIn.split('-');
  const checkOutArr = checkOut.split('-');

  const checkInUtc = Date.UTC(checkInArr[0], checkInArr[1] - 1, checkInArr[2]);
  const checkOutUtc = Date.UTC(
    checkOutArr[0],
    checkOutArr[1] - 1,
    checkOutArr[2]
  );

  if (checkInUtc > yesterday && checkOutUtc > checkInUtc) {
    validated = true;
  }
  console.log(validated);
  return validated;
};

export default validateDate;
