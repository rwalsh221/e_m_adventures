export const formatTime = (unixTimeStamp) => {
  const time = unixTimeStamp;

  const date = new Date(time * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = `0${date.getMinutes()}`;

  // Will display time in 10:30:23 format
  return `${hours} : ${minutes.substr(-2)}`;
};

export const formatDate = (unixTimeStamp) => {
  const time = unixTimeStamp;
  const date = new Date(time * 1000);

  const day = date.getDate();

  const month = date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day.toString().length > 1 ? day : `0${day}`}/${
    month.toString().length > 1 ? month : `0${month}`
  }/${year}`;
};

export const getDay = (unixTimeStamp) => {
  const time = unixTimeStamp;

  const date = new Date(time * 1000);

  const dayNumber = date.getDay();

  let day;

  switch (dayNumber) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      break;
  }

  return day;
};

export const dateToMilliseconds = (date) => {
  const dateArr = date.split('-');

  return Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2]);
};

export const getFullDays = (checkIn, checkOut) => {
  const milliSeconds = 24 * 60 * 60 * 1000;

  const bookedDaysArr = [];

  for (let i = checkIn; i < checkOut; i += milliSeconds) {
    if (i !== checkIn) bookedDaysArr.push(i);
  }

  return bookedDaysArr;
};
